import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const headerItem = [
    { id: "1", name: "Home", url: "/", login: "Both" },
    { id: "2", name: "Log In", url: "/signin", login: "False" },
    { id: "3", name: "Log Out", url: "/", login: "True" },
    { id: "4", name: "Register", url: "/signup", login: "False" },
    { id: "5", name: "Edit", url: "/edit", login: "True" },
  ];

  return (
    <header>
      <h1>Zenlogue</h1>
      <div className="nav-bar">
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {headerItem.map((x) => (
            <Link key={x.id} to={x.url} onClick={() => setMenuOpen(false)}>
              {x.name}
            </Link>
          ))}
        </div>
        <a className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </a>
      </div>
    </header>
  );
}

export default Header;
