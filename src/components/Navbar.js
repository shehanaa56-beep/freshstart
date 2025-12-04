import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>FS</Link>
      </div>

      {/* Hamburger Menu Button */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
      </div>

      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/garage" onClick={closeMenu}>Garage</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
        <li><Link to="/insurance" onClick={closeMenu}>Insurance</Link></li>
        <li><Link to="/sell" onClick={closeMenu}>Sell Your Car</Link></li>
        <li><Link to="/custom-order" onClick={closeMenu}>Custom Order</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>

      <div className="navbar-actions">
        <Link to="/contact" className="get-in-touch-btn" onClick={closeMenu}>Get in Touch</Link>
      </div>
    </nav>
  );
};

export default Navbar;
