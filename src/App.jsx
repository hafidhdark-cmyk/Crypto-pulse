import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import WatchlistPage from './pages/WatchlistPage'
import About from './pages/About'
import { useLocalStorage } from './hooks/useLocalStorage'
import './App.css'

function App() {
  const [watchlist, setWatchlist] = useLocalStorage("crypto_watchlist", []);
  const toggleWatchlist = (coin) => {
    const exists = watchlist.some((item) => item.id === coin.id)
    if (exists) {
      setWatchlist(watchlist.filter((item) => item.id !== coin.id));
    } else {
      setWatchlist([...watchlist, coin]);
    }
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home watchlist={watchlist} onToggleWatchlist={toggleWatchlist} />}
        />
        <Route
          path="/watchlist"
          element={<WatchlistPage watchlist={watchlist} onToggleWatchlist={toggleWatchlist} />}
        />
        <Route
          path="/about"
          element={<About />}
        />
      </Routes>
    </>
  )
}

export default App;
