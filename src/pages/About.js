import React from 'react';
import '../App.css';

const About = () => {
  return (
    <div className="about">
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
    </div>
  );
};

export default About;
