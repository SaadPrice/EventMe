// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Events from './pages/Events'; // Ensure the case matches the actual file name
import LandingPage from './pages/LandingPage';
import MyTickets from './pages/MyTickets';
import MySavedEvents from './pages/MySavedEvents';
import Navbar from './components/Navbar'; // Import the Navbar component
import './App.scss'; // Ensure this path matches the location of App.scss

const App = () => {
  return (
    <Router>
      <div id="root">
        <Navbar />  {/* Add the Navbar component here */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/my-tickets" element={<MyTickets />} />
          <Route path="/my-saved-events" element={<MySavedEvents />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;








