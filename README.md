# Fior Glow — Backend (Node.js + Express + MongoDB Atlas)

সাইট internet এ real customer দের জন্য live করার জন্য এই ৪টা ধাপ অনুসরণ করো।

---

## ধাপ ১: MongoDB Atlas — ফ্রি database বানাও

1. যাও: https://www.mongodb.com/cloud/atlas/register
2. একটা ফ্রি account বানাও (email/Google দিয়ে)
3. "Create a deployment" → **M0 (Free)** টিয়ার সিলেক্ট করো
4. Cluster তৈরি হতে ১-২ মিনিট সময় নেবে
5. একটা database user বানাতে বলবে — username আর password দাও, **এই password টা লিখে রাখো**
6. "Network Access" এ যাও → **"Allow Access from Anywhere"** (0.0.0.0/0) সিলেক্ট করো (এটা জরুরি, নাহলে Render থেকে connect হবে না)
7. "Connect" বাটনে ক্লিক করো → **"Drivers"** সিলেক্ট করো → একটা connection string দেখাবে, এরকম:
   ```
   mongodb+srv://username:<password>@cluster0.xxxxx.mongodb.net/
   ```
8. `<password>` এর জায়গায় তোমার আসল password বসাও, পুরো string টা কোথাও সেভ করে রাখো — এটাই তোমার `MONGODB_URI`

---

## ধাপ ২: GitHub account বানাও ও কোড আপলোড করো

1. যাও: https://github.com/signup
2. ফ্রি account বানাও
3. Login করার পর, উপরে ডান কোণায় **"+"** আইকনে ক্লিক করো → **"New repository"**
4. একটা নাম দাও (যেমন `fior-glow-backend`), **Public** সিলেক্ট করো, তারপর **"Create repository"**
5. নতুন repository পেজে **"uploading an existing file"** লিংকে ক্লিক করো
6. এই ফোল্ডারের ভেতরের সব ফাইল আর ফোল্ডার (`server.js`, `package.json`, `public` ফোল্ডার, `README.md`, `.gitignore` — **`node_modules` ফোল্ডার ও `.env` ফাইল বাদে**) drag করে ওই পেজে ছেড়ে দাও
7. নিচে "Commit changes" বাটনে ক্লিক করো

---

## ধাপ ৩: Render.com এ deploy করো

1. যাও: https://render.com এবং GitHub দিয়ে sign up করো
2. Dashboard এ **"New +"** → **"Web Service"**
3. তোমার GitHub repo (`fior-glow-backend`) সিলেক্ট করো (permission চাইলে allow করো)
4. Settings এ:
   - **Name:** যা খুশি (যেমন `fior-glow`)
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** Free
5. নিচে **"Environment Variables"** সেকশনে **"Add Environment Variable"** ক্লিক করো:
   - Key: `MONGODB_URI`
   - Value: ধাপ ১ এ যেই connection string সেভ করেছিলে সেটা পেস্ট করো
6. **"Deploy Web Service"** ক্লিক করো
7. ২-৩ মিনিট অপেক্ষা করো — শেষে একটা লিংক দেবে, এরকম:
   ```
   https://fior-glow.onrender.com
   ```
   এটাই তোমার সাইটের **live লিংক** — যে কেউ, যেকোনো জায়গা থেকে এটা খুলতে পারবে।

---

## ধাপ ৪: নিজের কম্পিউটারে টেস্ট করতে চাইলে (optional)

1. এই ফোল্ডারে একটা `.env` নামের ফাইল বানাও (VS Code এ New File)
2. ভেতরে লেখো:
   ```
   MONGODB_URI=তোমার_connection_string
   ```
3. Terminal এ:
   ```
   npm install
   npm start
   ```
4. Browser এ `http://localhost:3000`

---

## মনে রাখার বিষয়

- Render এর **ফ্রি প্ল্যানে** সাইট ১৫ মিনিট কেউ visit না করলে "ঘুমিয়ে" যায় — পরের visitor এ আবার জেগে উঠতে ৩০-৫০ সেকেন্ড লাগতে পারে। এটা স্বাভাবিক, ডাটা হারায় না (কারণ ডাটা MongoDB তে, Render এ না)।
- `.env` ফাইলটা **কখনো GitHub এ আপলোড করবে না** (`.gitignore` এ এটা বাদ দেওয়াই আছে) — এতে তোমার database password থাকে।
