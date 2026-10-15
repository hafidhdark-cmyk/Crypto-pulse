import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

const ThemeContext = createContext();

export function ThemeProvider({children}){
    const [theme, setTheme] = useLocalStorage("theme", "dark");
    const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <div className={`app-theme-wrapper ${theme}-theme`}>
            {children}
          </div>
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    return useContext(ThemeContext);
}