import React from 'react';
import '../App.css';

import cars from '../data/carss';

const Garage = () => {
  return (
    <div className="garage" style={{ textAlign: 'center', padding: '20px' }}>
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
    </div>
  );
};

export default Garage;
