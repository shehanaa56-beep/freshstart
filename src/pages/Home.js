import React, { useState } from 'react';
import { FaShieldAlt, FaFileAlt, FaCreditCard } from 'react-icons/fa';
import cars from '../data/cars';
import '../App.css';

const Home = () => {
  // Contact State
  const [contactFormData, setContactFormData] = useState({
    name: '',
    contact: '',
    email: '',
    message: ''
  });

  const handleContactChange = (e) => {
    setContactFormData({ ...contactFormData, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Data:', contactFormData);
    alert('Message submitted! Check console for data.');
    setContactFormData({ name: '', contact: '', email: '', message: '' });
  };

  return (
    <div className="home">
      {/* Luxury Car Image Section */}
      <section className="car-image-section">
        <div className="image-container">
          <img src="/images/lux.png" alt="Luxury Car" className="lux-car" />
        </div>
      </section>

      <div className="home-content">
        {/* Hero Banner */}
        <section className="hero">
          <div className="hero-overlay" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1 className="hero-title">FRESH START</h1>
            <p className="hero-subtitle">Find Your Drive. Start Fresh. Trusted cars. Honest deals. Every journey begins with a fresh start.</p>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="stats">
          <div className="stat">
            <h2>500+</h2>
            <p>Quality Cars</p>
          </div>
          <div className="stat">
            <h2>50+</h2>
            <p>Models</p>
          </div>
          <div className="stat">
            <h2>100%</h2>
            <p>Satisfaction</p>
          </div>
        </section>

        {/* Garage Section */}
        <section id="garage" className="garage-section" style={{ textAlign: 'center', padding: '20px' ,color:'#0b0a03ff'}}>
          <h1>Our Garage</h1>
          <p>Explore our curated collection of reliable family cars inspected to the highest standards.</p>
          <div className="cars-grid">
            {cars.map(car => (
              <div key={car.id} className="car-card">
                <img src={car.imageUrl} alt={car.name} />
                <div className="car-details">
                  <h3>{car.name}</h3>
                  <p>{car.year}</p>
                  <p>{car.mileage}</p>
                  <p>{car.fuel}</p>
                  <p className="price">{car.price}</p>
                  <div className="car-actions">
                    <button className="view-btn">View Details</button>
                    <span className="available">Available</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Insurance Section */}
        <section id="insurance" className="insurance-section" style={{ textAlign: 'center', padding: '20px' ,color:'#a39315ff'}}>
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
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section" style={{ textAlign: 'center', padding: '20px' ,color:'#beab15ff'}}>
          <h1>Get in Touch</h1>
          <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

          {/* Contact Info */}
          <section className="contact-info">
            <div className="info-item">
              <span className="icon">📞</span>
              <div>
                <h3>Phone</h3>
                <p>+1 (555) 234-5678</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">📧</span>
              <div>
                <h3>Email</h3>
                <p>hello@freshstart.com</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">📍</span>
              <div>
                <h3>Address</h3>
                <p>123 Auto Drive, Car City, CC 12345</p>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="contact-form">
            <h2>Send us a message</h2>
            <form onSubmit={handleContactSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={contactFormData.name}
                onChange={handleContactChange}
                required
              />
              <input
                type="tel"
                name="contact"
                placeholder="Contact Number"
                value={contactFormData.contact}
                onChange={handleContactChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={contactFormData.email}
                onChange={handleContactChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={contactFormData.message}
                onChange={handleContactChange}
                rows="5"
                required
              ></textarea>
              <button type="submit" className="submit-btn">Submit Message</button>
            </form>
          </section>
        </section>

        {/* About Section */}
        <section id="about" className="about-section" style={{ textAlign: 'center', padding: '20px' ,color:'#beab15ff'}}>
          <h1>About Us</h1>
          <section className="about-hero">
            <h2>Driven by Trust.</h2>
            <h2>Focused on You.</h2>
            <p>At Fresh Start, we redefine car buying with transparency, reliability, and comfort. Whether it's your first car or a family upgrade – we make it easy.</p>
          </section>

          <section className="about-features">
            <div className="feature">
              <h3>Quality Assurance</h3>
              <p>Every vehicle undergoes rigorous inspection to meet the highest standards of safety and performance.</p>
            </div>
            <div className="feature">
              <h3>Transparent Fees</h3>
              <p>No surprises. Just honest deals that respect your budget and trust.</p>
            </div>
            <div className="feature">
              <h3>24/7 Support</h3>
              <p>We're here for you anytime. Expert assistance whenever you need it.</p>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Home;
