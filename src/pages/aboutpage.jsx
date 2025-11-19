// src/components/AboutPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="page">
     

      <div className="hero-section about-hero">
        {/* Background image is handled via CSS */}
      </div>

      <div className="about-content">
        <h2 className="about-title">Don’t squeeze in a sedan when you could relax in a van.</h2>
        <p className="about-text">
          Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip
          to ensure your travel plans can go off without a hitch. <strong>(Hitch costs extra 😉)</strong><br/><br/>
          Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
        </p>
        <div className="cta-box">
          <h3>Your destination is waiting.<br/>Your van is ready.</h3>
          <button className="hero-button dark">Explore our vans</button>
        </div>
      </div>

      
    </div>
  );
};

export default AboutPage;