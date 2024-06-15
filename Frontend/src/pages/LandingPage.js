import React from 'react';
import './LandingPage.css'; // Import any specific styles for the LandingPage
import CustomNavbar from '../components/Navbar'; // Correct import path
import { AudioProvider } from '../context/AudioContext'; // Import AudioProvider

const LandingPage = () => {
  return (
    <AudioProvider>
      <CustomNavbar />
      <div className="landing-page">
        <div className="logo-container">
          <img src="/images/eventme-logo.jpg" alt="EventMe Logo" className="landing-logo" />
          <h1>Welcome to EventMe</h1>
        </div>
      </div>
    </AudioProvider>
  );
};

export default LandingPage;











