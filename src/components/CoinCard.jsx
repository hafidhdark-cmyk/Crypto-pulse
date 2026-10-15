import { Star } from "lucide-react";

export default function CoinCard({ coin, isWatchlisted, onToggleWatchlist }) {
    const isPositive = (coin.price_change_percentage_24h ?? 0) >= 0;
    return (
        <div className="coin-card">
            <div className="coin-header">
                <img src={coin.image} alt={coin.name} className="coin-icon" />
                <div>
                    <h4>{coin.name}</h4>
                    <span className="coin-symbol">{coin.symbol.toUpperCase()}</span>
                </div>
                <button onClick={(e) => onToggleWatchlist(coin)} className="watchlist-btn">
                    <Star size={18} fill={isWatchlisted ? "#eab308" : "none"} color={isWatchlisted ? "#eab308" : "#9ca3af"} />
                </button>
            </div>

            <div className="coin-price-section">
                <p className="coin-price">${coin.current_price.toLocaleString()}</p>
                <span className={isPositive ? "price-badge positive" : "price-badge negative"}>
                    {isPositive ? "+" : ""}{(coin.price_change_percentage_24h ?? 0).toFixed(2)}%
                </span>
            </div>
        </div>
    )
}