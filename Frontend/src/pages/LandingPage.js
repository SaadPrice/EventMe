import React, { useContext } from 'react';
import './LandingPage.css'; // Import any specific styles for the LandingPage
import CustomNavbar from '../components/Navbar'; // Correct import path
import { AudioContext } from '../context/AudioContext'; // Import AudioContext

const LandingPage = () => {
  const { isPlaying, togglePlayPause } = useContext(AudioContext);

  return (
    <div>
      <CustomNavbar />
      <div className="landing-page">
        <div className="logo-container">
          <img src="/images/eventme-logo.jpg" alt="EventMe Logo" className="landing-logo" />
          <h1>Welcome to EventMe</h1>
          <button onClick={togglePlayPause}>
            {isPlaying ? 'Pause Music' : 'Play Music'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;













