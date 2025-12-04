import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Garage from './pages/Garage';
import About from './pages/About';
import Insurance from './pages/Insurance';
import SellCar from './pages/SellCar';
import Contact from './pages/Contact';
import CustomOrder from './pages/CustomOrder';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/garage" element={<Garage />} />
            <Route path="/about" element={<About />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/sell" element={<SellCar />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/custom-order" element={<CustomOrder />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
