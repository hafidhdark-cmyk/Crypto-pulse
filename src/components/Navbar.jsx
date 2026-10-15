import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="navbar">
            <h2>CryptoPulse 🪙</h2>
            <div className="nav-links">
                <NavLink to="/">Market</NavLink>
                <NavLink to="/watchlist">Watchlist</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
            <button onClick={toggleTheme} className="theme-toggle-btn">
                {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
        </nav>
    )
}