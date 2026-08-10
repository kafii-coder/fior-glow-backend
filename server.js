// ==========================================================================
// Fior Glow — Backend Server (Node.js + Express + MongoDB Atlas)
//
// এই ভার্সনে যা নতুন যোগ হয়েছে (আগের generic /api/data store এর পাশাপাশি):
//
//   1. REAL AUTHENTICATION — /api/auth/register ও /api/auth/login এখন
//      server-side এ bcrypt দিয়ে password hash/verify করে, browser কে
//      বিশ্বাস করে না। Login সফল হলে একটা JWT token ফেরত দেয়।
//
//   2. SERVER-SIDE PRICE VERIFICATION — /api/orders এ order বসানোর সময়
//      client শুধু product id + quantity পাঠায়। Server নিজে database
//      থেকে প্রতিটা product এর আসল দাম দেখে total হিসাব করে — client
//      যেই price পাঠাক না কেন, সেটা কখনো ব্যবহার হয় না।
//
//   3. PER-USER ORDER ACCESS — /api/orders/mine শুধুমাত্র login করা
//      ব্যবহারকারীর নিজের order গুলো ফেরত দেয়, server তার token থেকে
//      পরিচয় যাচাই করে — client-side এ email দিয়ে filter করা হয় না।
//
//   4. ADMIN PASSCODE এখন সার্ভারের গোপন secret (environment variable),
//      frontend কোডে আর দেখা যায় না।
//
// পুরনো /api/data (GET/POST) endpoint অপরিবর্তিত আছে — products, banner,
// reviews ইত্যাদির মতো non-sensitive ডাটার জন্য এখনো ব্যবহার হয়।
// ==========================================================================

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { MongoClient, ObjectId } = require('mongodb');

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const JWT_SECRET = process.env.JWT_SECRET || 'change-this-secret-in-render-env-vars';
const ADMIN_PASSCODE = process.env.ADMIN_PASSCODE || 'fiorglow2026';

if (!MONGODB_URI) {
  console.error('\n  ❌ MONGODB_URI সেট করা নেই! .env ফাইলে বা Render এর Environment Variables এ যোগ করো।\n');
  process.exit(1);
}

let db;

async function connectDB() {
  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  db = client.db('fiorglow');
  await db.collection('users').createIndex({ email: 1 }, { unique: true });
  console.log('  ✅ MongoDB এর সাথে connect হয়েছে');
}

// --------------------------------------------------------------------------
// App setup
// --------------------------------------------------------------------------
const app = express();
app.use(cors());
app.use(express.json({ limit: '15mb' }));

function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '30d' });
}

// Reads "Authorization: Bearer <token>", verifies it, attaches req.user.
// If there's no/invalid token, req.user stays null (route decides what to do).
function readAuth(req) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return null;
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (e) {
    return null;
  }
}

function requireCustomer(req, res, next) {
  const user = readAuth(req);
  if (!user || user.role !== 'customer') {
    return res.status(401).json({ error: 'Please log in first' });
  }
  req.authUser = user;
  next();
}

function requireAdmin(req, res, next) {
  const user = readAuth(req);
  if (!user || user.role !== 'admin') {
    return res.status(401).json({ error: 'Admin login required' });
  }
  req.authUser = user;
  next();
}

// ==========================================================================
// GENERIC KEY-VALUE STORE — unchanged contract, used for products, banner,
// reviews, coupons, categories etc. (non-sensitive, or already public data).
// ==========================================================================
app.get('/api/data', async (req, res) => {
  const key = req.query.key;
  if (!key) return res.status(400).json({ error: 'key query param is required' });
  try {
    const doc = await db.collection('kv_store').findOne({ _id: key });
    res.json({ value: doc ? doc.value : null });
  } catch (e) {
    res.status(500).json({ error: 'database error' });
  }
});

app.post('/api/data', async (req, res) => {
  const key = req.query.key;
  if (!key) return res.status(400).json({ error: 'key query param is required' });
  const { value } = req.body || {};
  if (typeof value !== 'string') {
    return res.status(400).json({ error: 'body must be { "value": "<string>" }' });
  }

  // The product catalog is the highest-value target for tampering (anyone
  // could otherwise wipe/edit your whole shop with one request) — writes to
  // it now require a valid admin token. Everything else keeps working as
  // before (reviews, newsletter signups, wishlists, etc. are intentionally
  // open to any visitor).
  if (key === 'fiorglow_products_v1') {
    const user = readAuth(req);
    if (!user || user.role !== 'admin') {
      return res.status(401).json({ error: 'Admin login required to change products' });
    }
  }

  try {
    await db.collection('kv_store').updateOne(
      { _id: key },
      { $set: { value, updatedAt: new Date() } },
      { upsert: true }
    );
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: 'database error' });
  }
});

app.get('/api/health', (req, res) => res.json({ ok: true, time: new Date().toISOString() }));

// ==========================================================================
// CUSTOMER AUTH — real bcrypt hashing + JWT, server is the source of truth.
// ==========================================================================
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, phone, password } = req.body || {};
    if (!name || !email || !phone || !password) {
      return res.status(400).json({ error: 'name, email, phone and password are all required' });
    }
    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }
    const normEmail = String(email).trim().toLowerCase();

    const existing = await db.collection('users').findOne({ email: normEmail });
    if (existing) {
      return res.status(409).json({ error: 'An account with this email already exists' });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const doc = {
      name: String(name).trim(),
      email: normEmail,
      phone: String(phone).trim(),
      passwordHash,
      notify: true,
      addresses: [],
      createdAt: new Date().toISOString()
    };
    const result = await db.collection('users').insertOne(doc);

    const token = signToken({ sub: result.insertedId.toString(), role: 'customer', email: normEmail });
    res.json({
      token,
      user: { id: result.insertedId.toString(), name: doc.name, email: doc.email, phone: doc.phone, notify: doc.notify, createdAt: doc.createdAt }
    });
  } catch (e) {
    if (e.code === 11000) return res.status(409).json({ error: 'An account with this email already exists' });
    console.error('register error:', e.message);
    res.status(500).json({ error: 'Could not create account' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { identifier, password } = req.body || {};
    if (!identifier || !password) {
      return res.status(400).json({ error: 'identifier and password are required' });
    }
    const norm = String(identifier).trim().toLowerCase();
    const user = await db.collection('users').findOne({
      $or: [{ email: norm }, { phone: String(identifier).trim() }]
    });
    if (!user) return res.status(401).json({ error: 'No account found with that email or mobile number' });

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ error: 'Incorrect password' });

    const token = signToken({ sub: user._id.toString(), role: 'customer', email: user.email });
    res.json({
      token,
      user: { id: user._id.toString(), name: user.name, email: user.email, phone: user.phone, notify: user.notify, createdAt: user.createdAt, addresses: user.addresses || [] }
    });
  } catch (e) {
    console.error('login error:', e.message);
    res.status(500).json({ error: 'Login failed' });
  }
});

app.get('/api/auth/me', requireCustomer, async (req, res) => {
  try {
    const user = await db.collection('users').findOne({ _id: new ObjectId(req.authUser.sub) });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ user: { id: user._id.toString(), name: user.name, email: user.email, phone: user.phone, notify: user.notify, createdAt: user.createdAt, addresses: user.addresses || [] } });
  } catch (e) {
    res.status(500).json({ error: 'database error' });
  }
});

// ==========================================================================
// ADMIN AUTH — passcode now lives server-side only (Render env var), never
// shipped in the frontend JS where anyone could read it via view-source.
// ==========================================================================
app.post('/api/admin/login', (req, res) => {
  const { passcode } = req.body || {};
  if (passcode !== ADMIN_PASSCODE) {
    return res.status(401).json({ error: 'Wrong passcode' });
  }
  const token = signToken({ sub: 'owner', role: 'admin' });
  res.json({ token });
});

// ==========================================================================
// ORDERS — price is computed here from the real product data, never taken
// from what the client sends. Client only tells us WHAT (product id, qty,
// variant) and WHERE to ship — never HOW MUCH.
// ==========================================================================
app.post('/api/orders', async (req, res) => {
  try {
    const { items, name, phone, email, district, area, addressLine, notes, paymentMethod, trxId, couponCode } = req.body || {};

    if (!Array.isArray(items) || !items.length) return res.status(400).json({ error: 'Cart is empty' });
    if (!name || !phone || !district || !area || !addressLine) {
      return res.status(400).json({ error: 'Missing required delivery details' });
    }

    // Load the real product catalog + coupons from the shared store — this
    // is the one source of truth for prices, discounts and stock.
    const productsDoc = await db.collection('kv_store').findOne({ _id: 'fiorglow_products_v1' });
    const PRODUCTS = productsDoc ? JSON.parse(productsDoc.value) : [];
    const couponsDoc = await db.collection('kv_store').findOne({ _id: 'fiorglow_coupons_v1' });
    const COUPONS = couponsDoc ? JSON.parse(couponsDoc.value) : [];

    function effectivePrice(p) {
      const discount = Number(p.discountPercent) || 0;
      if (discount > 0 && discount <= 100) return Math.round(p.price - (p.price * discount / 100));
      return p.price;
    }

    const orderLines = [];
    let subtotal = 0;

    for (const line of items) {
      const product = PRODUCTS.find(p => p.id === line.id);
      if (!product) return res.status(400).json({ error: `Product ${line.id} no longer exists` });
      const qty = Math.max(1, parseInt(line.qty, 10) || 1);

      let unitPrice, lineName, inStock;
      if (line.variantId && product.variants && product.variants.length) {
        const variant = product.variants.find(v => v.id === line.variantId);
        if (!variant) return res.status(400).json({ error: `Option not found for ${product.name}` });
        unitPrice = variant.price;
        lineName = `${product.name} — ${variant.name}`;
        inStock = variant.inStock !== false;
      } else {
        unitPrice = effectivePrice(product);
        lineName = product.name;
        inStock = !!product.inStock;
      }

      if (!inStock) return res.status(400).json({ error: `${lineName} is out of stock` });

      subtotal += unitPrice * qty;
      orderLines.push({ name: lineName, qty, price: unitPrice });
    }

    // Coupon — re-validated server-side against the real active coupon list.
    let discount = 0, appliedCouponCode = null;
    if (couponCode) {
      const match = COUPONS.find(c => c.active && c.code.toLowerCase() === String(couponCode).toLowerCase());
      if (match) {
        discount = Math.round(subtotal * match.percent / 100);
        appliedCouponCode = match.code;
      }
    }

    const FREE_SHIPPING_THRESHOLD = 1000;
    const SHIPPING_FEE = 60;
    const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
    const total = subtotal - discount + shipping;

    const authUser = readAuth(req); // optional — guest checkout still allowed
    const address = [addressLine, area, district].filter(Boolean).join(', ');

    const orderDoc = {
      userId: authUser && authUser.role === 'customer' ? authUser.sub : null,
      customerEmail: authUser && authUser.role === 'customer' ? authUser.email : (email || null),
      customerName: name,
      customerPhone: phone,
      email: email || null,
      district, area, address, notes: notes || '',
      items: orderLines,
      subtotal, discount, shipping, total,
      coupon: appliedCouponCode,
      paymentMethod: paymentMethod === 'bkash' ? 'bkash' : 'cod',
      trxId: paymentMethod === 'bkash' ? (trxId || null) : null,
      status: 'Pending',
      date: new Date().toISOString()
    };

    const result = await db.collection('orders').insertOne(orderDoc);

    // Mirror into the legacy shared-store orders list too, so the existing
    // Admin Panel → Customers tab (which reads this list) keeps working
    // exactly as before, with no changes needed there.
    const legacyDoc = await db.collection('kv_store').findOne({ _id: 'fiorglow_orders_v1' });
    const legacyOrders = legacyDoc ? JSON.parse(legacyDoc.value) : [];
    legacyOrders.push({ id: result.insertedId.getTimestamp().getTime(), ...orderDoc });
    await db.collection('kv_store').updateOne(
      { _id: 'fiorglow_orders_v1' },
      { $set: { value: JSON.stringify(legacyOrders), updatedAt: new Date() } },
      { upsert: true }
    );

    res.json({ order: { id: result.insertedId.toString(), ...orderDoc } });
  } catch (e) {
    console.error('order error:', e.message);
    res.status(500).json({ error: 'Could not place order' });
  }
});

// Only returns orders belonging to the logged-in customer — the filter
// happens server-side using the verified token, not by trusting an email
// the client sends.
app.get('/api/orders/mine', requireCustomer, async (req, res) => {
  try {
    const orders = await db.collection('orders')
      .find({ userId: req.authUser.sub })
      .sort({ date: -1 })
      .toArray();
    res.json({ orders: orders.map(o => ({ ...o, id: o._id.toString() })) });
  } catch (e) {
    res.status(500).json({ error: 'database error' });
  }
});

// --------------------------------------------------------------------------
// Serve the frontend
// --------------------------------------------------------------------------
app.use(express.static(path.join(__dirname, 'public')));

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log('');
      console.log('  🌸 Fior Glow backend চালু হয়েছে!');
      console.log(`  ➜  Site: http://localhost:${PORT}`);
      console.log('');
    });
  })
  .catch(err => {
    console.error('❌ MongoDB এর সাথে connect করা যায়নি:', err.message);
    process.exit(1);
  });
