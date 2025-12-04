import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook } from 'react-icons/fa'; // Using react-icons
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/garage">Garage</Link></li>
            <li><Link to="/sell">Sell Car</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <Link to="#"><FaInstagram size={24} /></Link>
            <Link to="#"><FaFacebook size={24} /></Link>
          </div>
        </div>
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/blog">Blog</Link></li> {/* Placeholder for Blog */}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Fresh Start. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
