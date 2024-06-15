import React, { useContext, useEffect } from 'react';
import './LandingPage.css';
import CustomNavbar from '../components/Navbar';
import { AudioContext } from '../context/AudioContext';

const LandingPage = () => {
  const { togglePlayPause } = useContext(AudioContext);

  useEffect(() => {
    togglePlayPause();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="landing-page">
      <CustomNavbar />
      <div className="background"></div>
      <div className="logo-container">
        <img src="/images/eventme-logo.jpg" alt="EventMe Logo" className="landing-logo" />
        <h1>Welcome to EventMe</h1>
      </div>
    </div>
  );
};

export default LandingPage;











