import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Events from './pages/Events';
import LandingPage from './pages/LandingPage';
import MyTickets from './pages/MyTickets';
import MySavedEvents from './pages/MySavedEvents';
import Navbar from './components/Navbar';
import './App.scss';

const App = () => {
  return (
    <Router>
      <div id="root">
        <Navbar />
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









