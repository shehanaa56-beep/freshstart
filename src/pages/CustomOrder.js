import React, { useState } from 'react';
import './custom-order.css';

const CustomOrder = () => {
  const [orderData, setOrderData] = useState({
    name: '',
    contact: '',
    email: '',
    carType: '',
    specifications: '',
    budget: '',
    timeline: ''
  });

  const handleChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Custom Order Data:', orderData);
    alert('Custom order submitted! Check console for data.'); // Mock submission
    setOrderData({
      name: '',
      contact: '',
      email: '',
      carType: '',
      specifications: '',
      budget: '',
      timeline: ''
    });
  };

  return (
    <div className="custom-order">
      <h1>Custom Order</h1>
      <p>Design your dream car with our custom order service. Tell us your vision, and we'll make it a reality.</p>

      {/* Custom Order Form */}
      <section className="custom-order-form">
        <h2>Your Custom Order Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={orderData.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="contact"
              placeholder="Contact Number"
              value={orderData.contact}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={orderData.email}
            onChange={handleChange}
            required
          />
          <select
            name="carType"
            value={orderData.carType}
            onChange={handleChange}
            required
          >
            <option value="">Select Car Type</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="truck">Truck</option>
            <option value="sports">Sports Car</option>
            <option value="luxury">Luxury</option>
            <option value="other">Other</option>
          </select>
          <textarea
            name="specifications"
            placeholder="Describe your custom specifications (color, features, modifications, etc.)"
            value={orderData.specifications}
            onChange={handleChange}
            rows="6"
            required
          ></textarea>
          <div className="form-row">
            <input
              type="text"
              name="budget"
              placeholder="Budget Range"
              value={orderData.budget}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="timeline"
              placeholder="Preferred Timeline"
              value={orderData.timeline}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Submit Custom Order</button>
        </form>
      </section>
    </div>
  );
};

export default CustomOrder;
