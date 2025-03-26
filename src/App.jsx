import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import ThemeToggle from "./assets/components/ThemeToggle";
import NavigationBar from "./assets/components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <NavigationBar theme={theme}  />
      <Routes>
        <Route path="/Home" element={<Home theme={theme} />} />
        <Route path="/About" element={<About theme={theme} />} />
      </Routes>
    </>
  );
}

export default App;
