import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbars.css";

function Navbars({ darkTheme, toggleTheme }) {
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        if (searchOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [searchOpen]);

    return (
        <nav className="navbar">
            <div className="navbar-links">
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/about" className="navbar-link">About Us</Link>
                <Link to="/contact" className="navbar-link">Contact Us</Link>
            </div>
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                <div className={`navbar-search-area${searchOpen ? " expanded" : ""}`}>
                    {searchOpen && (
                        <input
                            ref={inputRef}
                            type="text"
                            className="navbar-search-input"
                            placeholder="Search..."
                            value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                            onBlur={() => setSearchOpen(false)}
                        />
                    )}
                    <button
                        className="navbar-search-btn"
                        onClick={() => setSearchOpen(open => !open)}
                        tabIndex={0}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="navbar-theme-btn"
                    onClick={toggleTheme}
                    title="Toggle dark theme"
                >
                    {darkTheme ? "Light Mode" : "Dark Mode"}
                </button>
            </div>
        </nav>
    );
}

export default Navbars;
