import React from 'react';
import cars from '../data/cars';
import '../App.css';

const Models = () => {
  return (
    <div className="models">
      <h1>Models</h1>
      <p>Discover our range of car models with detailed specifications.</p>
      <div className="models-grid">
        {cars.map(car => (
          <div key={car.id} className="model-card">
            <img src={car.imageUrl} alt={car.name} />
            <div className="model-details">
              <h3>{car.name}</h3>
              <p>{car.year}</p>
              <p>{car.mileage}</p>
              <p>{car.fuel}</p>
              <p className="price">{car.price}</p>
              <div className="model-actions">
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

export default Models;
