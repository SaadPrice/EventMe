import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss';
// If the image is in the src folder, you can import it like this:
// import eventImage from '../path/to/your/image.jpg';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to EventMe</h1>
      {/* If the image is in the public folder, you can reference it like this: */}
      <img src="/path/to/your/image.jpg" alt="Event" className="landing-page-image" />
      <Link to="/events">View Events</Link>
    </div>
  );
};

export default LandingPage;

