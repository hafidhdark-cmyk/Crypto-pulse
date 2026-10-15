import { useState } from "react";
import useFetch from "../hooks/useFetch";
import CoinCard from "../components/CoinCard";
import { Search } from "lucide-react";

const COINS_API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";

export default function Home({ watchlist = [], onToggleWatchlist }) {
    const { data: coins, loading, error } = useFetch(COINS_API_URL);
    const [searchTerm, setSearchTerm] = useState("");
    const filteredCoins = (coins || []).filter((coin =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    ));
    return (
        <div className="container">
            <h1>Live Crypto Market 📊</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search by coin name or symbol(e.g BTC, Solana)..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            {loading && <p className="status-text">Fetching Live market data...</p>}
            {error && <p className="error-text">Error : {error}</p>}

            <div className="coins-grid">
                {filteredCoins.map((coin) => (
                    <CoinCard
                        key={coin.id}
                        coin={coin}
                        isWatchlisted={watchlist.some((item) => item.id === coin.id)}
                        onToggleWatchlist={onToggleWatchlist}
                    />
                ))}
            </div>
        </div>
    )
}