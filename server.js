// ==========================================================================
// Fior Glow — Backend Server (Node.js + Express + JSON file storage)
//
// এই server.js ফাইলটা তোমার Netlify Function (/api/data) এর জায়গা নিয়ে
// নিজের কম্পিউটারে চলবে। frontend এর fior_glow_web.js কোনো পরিবর্তন ছাড়াই
// এর সাথে কাজ করবে, কারণ API contract একদম আগের মতোই রাখা হয়েছে:
//
//   GET  /api/data?key=xxx   ->  { value: "..." | null }
//   POST /api/data?key=xxx   ->  body: { value: "..." }  ->  200 OK
//
// CHANGED: এই ভার্সনে ডাটা SQLite এর বদলে একটা সাধারণ JSON ফাইলে
// (data/store.json) সেভ হয় — কোনো native/C++ module কম্পাইল করার দরকার নেই,
// তাই Python বা build tools ছাড়াই যেকোনো Windows/Mac/Linux এ চলবে।
// ==========================================================================

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

// --------------------------------------------------------------------------
// Storage setup — one JSON file, no database server or native module needed.
// --------------------------------------------------------------------------
const DATA_DIR = path.join(__dirname, 'data');
const STORE_FILE = path.join(DATA_DIR, 'store.json');

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(STORE_FILE)) fs.writeFileSync(STORE_FILE, '{}', 'utf8');

function readStore() {
  try {
    const raw = fs.readFileSync(STORE_FILE, 'utf8');
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error('Could not read store.json, starting fresh:', e.message);
    return {};
  }
}

function writeStore(store) {
  // write to a temp file then rename — avoids a half-written file if the
  // process is killed mid-save
  const tmpFile = STORE_FILE + '.tmp';
  fs.writeFileSync(tmpFile, JSON.stringify(store), 'utf8');
  fs.renameSync(tmpFile, STORE_FILE);
}

// --------------------------------------------------------------------------
// App setup
// --------------------------------------------------------------------------
const app = express();
app.use(cors());
app.use(express.json({ limit: '15mb' })); // product images etc. can be largeish base64

// --------------------------------------------------------------------------
// API: generic key-value store — same contract as the old /api/data
// --------------------------------------------------------------------------
app.get('/api/data', (req, res) => {
  const key = req.query.key;
  if (!key) return res.status(400).json({ error: 'key query param is required' });

  const store = readStore();
  res.json({ value: Object.prototype.hasOwnProperty.call(store, key) ? store[key] : null });
});

app.post('/api/data', (req, res) => {
  const key = req.query.key;
  if (!key) return res.status(400).json({ error: 'key query param is required' });

  const { value } = req.body || {};
  if (typeof value !== 'string') {
    return res.status(400).json({ error: 'body must be { "value": "<string>" }' });
  }

  const store = readStore();
  store[key] = value;
  writeStore(store);
  res.json({ ok: true });
});

// Small helper endpoint — handy for checking the server is alive
app.get('/api/health', (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

// --------------------------------------------------------------------------
// Serve the frontend itself (index.html = your fior.html, plus its css/js)
// --------------------------------------------------------------------------
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log('');
  console.log('  🌸 Fior Glow backend চালু হয়েছে!');
  console.log(`  ➜  Site:   http://localhost:${PORT}`);
  console.log(`  ➜  API:    http://localhost:${PORT}/api/data?key=fiorglow_products_v1`);
  console.log(`  ➜  Data file: data/store.json`);
  console.log('');
});
