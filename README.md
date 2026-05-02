<div align="center">



# 🛒 SpendProof
### *Shop Smart. Stay Proof.*
<img width="4096" height="2298" alt="SpendProof Header Github" src="https://github.com/user-attachments/assets/7795d4e7-03fa-4f41-afe4-d649f78a2ba2" />

![Version](https://img.shields.io/badge/version-1.0.0-brightgreen)
![Platform](https://img.shields.io/badge/platform-Android-blue)
![License](https://img.shields.io/badge/license-MIT-orange)
![Price](https://img.shields.io/badge/price-Free-purple)
![Ads](https://img.shields.io/badge/ads-None-red)

> **SpendProof** is a smart shopping companion for Indian malls and grocery stores. Every time you enter a mall, check in — then scan products, track your budget live, and watch your timer. Walk out with exactly what you came for, nothing more.

</div>

---

## 🚨 The Problem

Every time we walk into a mall or grocery store, we are walking into a carefully engineered trap:

- 🎯 **Marketing traps** — Buy 1 Get 1 deals, bulk discounts, and "limited time" signs that force you to spend more while feeling like you are saving
- ⏰ **The time trap** — No clocks, no windows. Malls are deliberately designed so you lose track of time and stay longer
- 🍬 **The packaging trap** — Bright colours, misleading health labels, and oversized food images that manipulate what you put in your cart
- 💸 **No budget awareness** — No real-time feedback on how much you have spent until you check your bank account later

---

## 💡 The Solution

**SpendProof** puts you back in control — it works in three layers:

| Layer | What it does |
|---|---|
| ⏱️ **Time Awareness** | Live timer so you always know how long you have been inside |
| 💰 **Budget Tracking** | Visual bar fills green → yellow → red as you scan items |
| 🛒 **Cart Consciousness** | Every scan is intentional — review and remove items before checkout |

---

## ✨ Features

### 🔐 Sign In
- Email and password login and registration
- One-tap Google sign in
- Secure session via Supabase Auth

---

### 📊 Dashboard
Your home screen — a full snapshot of your shopping life.

- 🏬 Total mall visits this month
- ⏱️ Total time spent in malls
- 💸 Total amount spent this month
- 📦 Total items scanned all time
- 📊 Average spend per mall
- 🗂️ Most bought category
- 📅 Monthly spend summary

---

### 🏬 Check-In Flow
Hit Check-In before entering any mall and set up your session in seconds.

**Select your mall** from a list including:
- D-Mart
- Reliance Smart Point
- Vishal Mega Mart
- Big Bazaar
- More Supermarket
- Spencer's
- Star Bazaar
- Lulu Hypermarket
- V-Mart
- Custom (type your own)

**Set a budget (optional)**
A live bar tracks your spend — fills green to red. At 100% a popup alerts you to review or increase your budget.

**Set a time limit (optional)**
A countdown timer starts. If no time is set, a count-up timer runs so you always know how long you have been inside.

---

### 📷 Barcode Scanner
Scan any product barcode — info is fetched automatically from our database.

- Product name, brand and category shown instantly
- Enter the price (required — prices vary by store)
- Tap Add to Cart
- If a product is not found — fill it in manually and earn a **Contributor Badge** 🏅

---

### 🛒 Live Cart
See everything in your cart in real time.

- Running total updates with every scan
- Budget bar visible at top of screen
- Timer always running
- Remove any item with one tap

---

### ✅ Session Summary
When you checkout, see a full summary of your session:

- Mall visited
- Time spent inside
- Total spent vs budget
- Number of items scanned
- Amount saved if under budget
- Full session saved to history automatically

---

### 🏅 Badges

Earn badges as you shop smarter:

| Badge | How to earn |
|---|---|
| 🥇 First Scan | Scan your first product |
| 🏬 Mall Veteran | Complete 10 check-ins |
| 💰 Budget Master | Finish 5 sessions under budget |
| ⏱️ Speed Shopper | Complete a session in under 20 minutes |
| 📦 Contributor | Add a product not in the database |
| 🌟 Super Contributor | Add 10 community products |
| 🧠 Smart Shopper | Stay under budget 3 visits in a row |

---

### ⚙️ Settings
- 🌙 Dark Mode / ☀️ Light Mode toggle
- Edit your profile
- Notification preferences
- Sign out

---

## 📲 How to Install

### Option 1 — Google Play Store
Search **SpendProof** on the Play Store and tap Install.

### Option 2 — Direct APK
1. Download `SpendProof.apk` from the [Releases](../../releases) page
2. On your Android phone go to **Settings → Security → Install unknown apps** and enable it
3. Open the downloaded APK and tap Install

---

## 🔑 Permissions

| Permission | Why it's needed |
|---|---|
| 📷 Camera | Barcode scanning only — not used for photos |
| 🔔 Notifications | Optional — timer alerts and budget warnings during a session |
| 🌐 Internet | Fetch product info and sync your session data |

> SpendProof never accesses your contacts, location, microphone, or file storage. No data is sold or shared with third parties.

---

## 🔮 Coming in Future Versions

### v2.0
- 📋 **Pre-Shopping List** — Plan your list before entering. App flags anything off-plan while you scan
- 🚨 **Trap Detector** — Scans Buy1Get1 deals and tells you if it is actually worth your budget
- 🥗 **Health Score** — Nutri-Score grade on every product powered by Open Food Facts API

### v3.0
- 🔔 **Smart Nudges** — Gentle in-session alerts at key moments
- 👨‍👩‍👧 **Family Sessions** — Share a live cart and budget with a family member
- 🍎 **iOS Release** — App Store launch

---

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| React Native + Expo | Mobile app framework |
| Supabase | Backend, Auth, Database |
| Open Food Facts API | Free product database |
| UPC Item DB | Barcode lookup fallback |
| Zustand | State management |
| NativeWind | Styling |

---

## 🤝 Contributing

Contributions are welcome once v1.0 is stable. Feel free to open issues and pull requests.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👤 Author

**subhadipshil-dev**

Built by a shopper tired of walking out of D-Mart with things they never planned to buy.

---

<div align="center">

**SpendProof** — *Because the mall is designed against you. Now you have a weapon.*

⭐ Star this repo if you find it useful!

</div>
