// src/components/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="page">
      
      <div className="hero-section home-hero">
        <h2 className="hero-title">You got the travel plans, we got the travel vans.</h2>
        <p className="hero-subtitle">
          Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
        </p>
        <button className="hero-button">Find your van</button>
      </div>

      
    </div>
  );
};

export default HomePage;