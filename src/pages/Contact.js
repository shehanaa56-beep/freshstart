import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Data:', formData);
    alert('Message submitted! Check console for data.'); // Mock submission
    setFormData({ name: '', contact: '', email: '', message: '' });
  };

  return (
    <div className="contact">
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
          <button type="submit" className="submit-btn">Submit Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
