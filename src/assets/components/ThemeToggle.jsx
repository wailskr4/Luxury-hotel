import { useState, useEffect } from "react";
import "./Togglestyle.css";

function ThemeToggle() {
  // Here we store the local value of the attribute
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  

  // Fonction pour basculer entre les thèmes
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="toggle-container">
      <label className="switch">
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={theme === "dark"}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default ThemeToggle;
