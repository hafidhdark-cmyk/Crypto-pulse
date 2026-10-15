export default function About() {
    return (
        <div className="container">
            <h1>About CryptoPulse 🪙</h1>
            <p>A real-time cryptocurrency tracking suite and watchlist built with React.</p>
            <div className="about-content">
                <h3>Tech Stack & Architecture</h3>
                <ul>
                    <li><strong>Framework:</strong>React 19 + Vite</li>
                    <li><strong>Routing:</strong>React Router DOM (SPA Navigation)</li>
                    <li><strong>Custom Hooks</strong>useFetch(CoinGecko API) & useLocalStorage(Watchlist persistence)</li>
                    <li><strong>Global State:</strong>Context API(ThemeContext for Dark/Light mode)</li>
                    <li><strong>Styling:</strong>CSS Glassmorphism + Responsive Design</li>
                </ul>
            </div>
        </div>
    )
}