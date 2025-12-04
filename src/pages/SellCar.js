import React, { useState } from 'react';
import './sell.css';

const SellCar = () => {
  const [carDetails, setCarDetails] = useState({
    make: '',
    model: '',
    year: '',
    mileage: ''
  });
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    contact: '',
    email: '',
    condition: ''
  });

  const handleCarChange = (e) => {
    setCarDetails({ ...carDetails, [e.target.name]: e.target.value });
  };

  const handlePersonalChange = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Car Details:', carDetails);
    console.log('Personal Info:', personalInfo);
    alert('Details submitted! Check console for data.'); // Mock submission
  };

  return (
    <div className="sell-car">
      <h1>Sell Your Car</h1>
      <p>Looking to sell your car? You've come to the right place. At Fresh Start, we make the process simple, fast, and fair.</p>

      {/* Car Details Form */}
      <section className="car-details">
        <h2>CAR DETAILS</h2>
        <p>Fill in your information and we'll get back to you with the best offer.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="make"
              placeholder="Car Make"
              value={carDetails.make}
              onChange={handleCarChange}
            />
            <input
              type="text"
              name="model"
              placeholder="Car Model"
              value={carDetails.model}
              onChange={handleCarChange}
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              name="year"
              placeholder="Year"
              value={carDetails.year}
              onChange={handleCarChange}
            />
            <input
              type="text"
              name="mileage"
              placeholder="Mileage (km)"
              value={carDetails.mileage}
              onChange={handleCarChange}
            />
          </div>
        </form>
      </section>

      {/* Personal Info Form */}
      <section className="personal-info">
        <h2>YOUR DETAILS</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={personalInfo.name}
            onChange={handlePersonalChange}
          />
          <input
            type="tel"
            name="contact"
            placeholder="Contact Number"
            value={personalInfo.contact}
            onChange={handlePersonalChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={personalInfo.email}
            onChange={handlePersonalChange}
          />
          <textarea
            name="condition"
            placeholder="Describe your car condition."
            value={personalInfo.condition}
            onChange={handlePersonalChange}
            rows="4"
          ></textarea>
          <button type="submit" className="submit-btn">Submit Details</button>
        </form>
      </section>
    </div>
  );
};

export default SellCar;
