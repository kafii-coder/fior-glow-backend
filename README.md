# Fior Glow — Backend (Node.js + Express + SQLite)

## এটা কী

এটা তোমার Fior Glow সাইটের জন্য একটা real Node.js backend, যেটা তোমার আগের
Netlify Function (`/api/data`) এর জায়গা নিয়েছে — কিন্তু API একদম আগের মতোই,
তাই তোমার `fior_glow_web.js` ফাইলে **একটা লাইনও বদলাতে হয়নি**।

- Data আগে localStorage / Netlify Blobs এ ছিল → এখন একটা real **SQLite** ফাইলে
  (`data/fiorglow.db`) সেভ হয়।
- Server বন্ধ করে আবার চালু করলেও ডাটা থেকেই যাবে।
- Frontend ফাইলগুলো (`public/index.html`, `public/fior_glow_web.css`,
  `public/fior_glow_web.js`) এই backend থেকেই সার্ভ হয় — মানে একটাই সার্ভার
  চালালে পুরো সাইট + backend দুটোই কাজ করবে।

## কীভাবে চালাবে (VS Code)

1. এই ফোল্ডারটা VS Code এ খোলো।
2. Terminal খুলে (Ctrl + `) লেখো:
   ```
   npm install
   ```
   (শুধু প্রথমবার লাগবে — এটা `express`, `better-sqlite3`, `cors` ইনস্টল করবে)
3. তারপর লেখো:
   ```
   npm start
   ```
4. Terminal এ দেখাবে: `Site: http://localhost:3000` — সেটা browser এ খুলে ফেলো।
   পুরো সাইট এখান থেকেই চলবে, আর সব change (product add/edit, order, review,
   admin panel — সবকিছু) এখন সত্যিকারের backend এ সেভ হবে।

Server বন্ধ করতে Terminal এ `Ctrl + C` চাপো।

## ফোল্ডার স্ট্রাকচার

```
fior-backend/
  server.js              ← main backend file (Express + SQLite)
  package.json           ← dependency list
  data/
    fiorglow.db           ← (এটা নিজে থেকে তৈরি হবে, প্রথমবার চালানোর পর)
  public/
    index.html            ← তোমার fior.html
    fior_glow_web.css      ← তোমার fior.css
    fior_glow_web.js       ← তোমার fior.js
```

## যদি port 3000 আগে থেকে ব্যবহার হয়ে থাকে

Terminal এ এভাবে চালাও:
```
PORT=4000 npm start
```
তারপর browser এ `http://localhost:4000` খুলবে।

## এরপর কী করা যায় (পরের ধাপ, এখন লাগবে না)

এই backend টা এখন তোমার আগের সিস্টেমের একটা secure, persistent replacement —
কিন্তু এখনো সবার জন্য read/write খোলা (তোমার আগের সিস্টেমও এমনই ছিল)। পরের
ধাপে যোগ করা যায়:

- Admin passcode চেক করে শুধু admin কে product/banner/etc বদলাতে দেওয়া
- Order বসানোর সময় server নিজে থেকে price/stock verify করা (client কে
  বিশ্বাস না করে)
- Password hashing (bcrypt) দিয়ে real user authentication

এগুলা চাইলে পরে যোগ করে দেব — এখন যেটা আছে সেটা দিয়েই পুরো সাইট চলে যাবে,
আর সব ডাটা সত্যিকারের backend এ সেভ হবে।
