# 🪙 CryptoPulse — Live Cryptocurrency Tracker & Portfolio Watchlist

A high-performance, glassmorphic cryptocurrency tracking suite and portfolio watchlist built with **React 19**, **Vite**, **React Router DOM**, custom hooks, and the **CoinGecko REST API**.

---

## ✨ Key Features & Architecture

* 🪙 **Live Market Data (`useFetch`)**: Real-time integration with CoinGecko API tracking 100+ top crypto assets, current prices, 24h percentage changes, and market caps.
* 🔍 **Instant Search & Filtering**: Client-side search allowing users to filter coins by name or ticker symbol (e.g., BTC, SOL, Ethereum) without re-fetching.
* ⭐ **Persistent Watchlist (`useLocalStorage`)**: Custom hook synchronizing favorite assets directly to browser storage so user portfolios persist across reloads.
* 🧭 **Multi-Page SPA Navigation (`react-router-dom`)**: Seamless client-side routing across Market (`/`), Watchlist (`/watchlist`), and About (`/about`) views without page refreshes.
* 🌗 **Global Theme Engine (`ThemeContext`)**: Context API provider broadcasting Dark and Light mode state across all routes with custom glassmorphism.
* 📱 **Modern Glassmorphic UI**: Styled with Google's `Outfit` typography, responsive CSS Grid layouts, and `lucide-react` icons.

---

## 🛠️ Tech Stack
* **Framework:** React 19 + Vite
* **Routing:** React Router DOM (v7)
* **API:** CoinGecko REST API
* **Icons:** Lucide React
* **Hooks & State:** `useState`, `useEffect`, custom `useFetch`, custom `useLocalStorage`, `ThemeContext`
* **Styling:** Vanilla CSS (Glassmorphism, Flexbox, CSS Grid)

---

## 🚀 Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hafidhdark-cmyk/Crypto-pulse.git
   cd Crypto-pulse
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

---

## 👤 Author
* **Developer:** Self-taught Frontend Software Engineer
* **Location:** Lagos, Nigeria 🇳🇬
* **GitHub:** [@hafidhdark-cmyk](https://github.com/hafidhdark-cmyk)
