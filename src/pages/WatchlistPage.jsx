import CoinCard from "../components/CoinCard";

export default function WatchlistPage({ watchlist = [], onToggleWatchlist }) {
    return (
        <div className="container">
            <h1>My Watchlist ⭐</h1>

            {watchlist.length === 0 ? (
                <div className="empty-watchlist">
                    <p>⭐ Your watchlist is currently empty </p>
                    <p>Head to the Market tab and star your favorite coins to track them here!</p>
                </div>
            ) : (
                <div className="coins-grid">
                    {watchlist.map((coin) => (
                        <CoinCard
                            key={coin.id}
                            coin={coin}
                            isWatchlisted={true}
                            onToggleWatchlist={onToggleWatchlist}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}