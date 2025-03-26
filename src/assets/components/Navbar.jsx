import React, { useEffect, useRef, useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import "./navstyle.css";

export default function NavigationBar({ theme }) {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const prevScrollYRef = useRef(0);
  const menuItemsRef = useRef([]);

  // Handle scroll event with better performance
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > prevScrollYRef.current !== isScrollingDown) {
      setIsScrollingDown(currentScrollY > prevScrollYRef.current);
    }
    prevScrollYRef.current = currentScrollY;
  }, [isScrollingDown]);

  // Animate menu items on mount
  useEffect(() => {
    menuItemsRef.current.forEach((item, index) => {
      if (item) {
        setTimeout(() => {
          item.style.visibility = "visible";
          item.style.opacity = "1";
        }, 550 + index * 100);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <nav
      className={`navbar-container navbar navbar-expand-lg ${
        theme === "dark" ? "dark-theme" : "light-theme"
      }  ${isScrollingDown ? "scrolled-down" : ""}`}
    >
      <div className="container-fluid">
        {/* Brand Logo */}
        <NavLink className="navbar-brand fw-bold" to="/Home">
          Luxury Hotel
        </NavLink>

        {/* Navbar Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            {["home", "Services", "About", "Contact"].map((item, index) => (
              <li
                className="nav-item"
                key={item}
                ref={(el) => (menuItemsRef.current[index] = el)}
                style={{ visibility: "hidden", opacity: 0, transition: "opacity 0.5s ease-in-out" }}
              >
                <NavLink className="nav-link" to={`/${item.toLowerCase()}`} exact>
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Search Bar */}
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              🔍
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
