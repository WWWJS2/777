import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img src="/logo.png" alt="Logo" />
          </Link>
        </div>

        <div className="burger" onClick={() => setIsOpen(!isOpen)}>
          <span className={`line ${isOpen ? "open" : ""}`}></span>
          <span className={`line ${isOpen ? "open" : ""}`}></span>
          <span className={`line ${isOpen ? "open" : ""}`}></span>
        </div>

        <nav className={`navbar-links ${isOpen ? "show" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Who We Are</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Our Services</Link>
          <Link to="/branches" onClick={() => setIsOpen(false)}>Our Branches</Link>
          <Link to="/franchise" onClick={() => setIsOpen(false)}>Franchise</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}
