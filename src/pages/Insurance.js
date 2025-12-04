import React from 'react';
import { FaShieldAlt, FaFileAlt, FaCreditCard } from 'react-icons/fa';
import '../App.css';

const Insurance = () => {
  return (
    <div className="insurance" style={{ textAlign: 'center', padding: '20px' ,color:'#110f04ff'}}>
      <h1>Insurance Protection</h1>
      <p>Drive with confidence knowing your plans are protected by the best coverage.</p>
      <div className="features-grid">
        <div className="feature-card">
          <FaShieldAlt size={48} className="feature-icon" />
          <h3>Complete Protection</h3>
          <p>Comprehensive coverage tailored to your needs.</p>
        </div>
        <div className="feature-card">
          <FaFileAlt size={48} className="feature-icon" />
          <h3>Easy Documentation</h3>
          <p>Hassle-free paperwork with digital processing.</p>
        </div>
        <div className="feature-card">
          <FaCreditCard size={48} className="feature-icon" />
          <h3>Flexible Plans</h3>
          <p>Choose from monthly, quarterly, or annual payment options.</p>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
