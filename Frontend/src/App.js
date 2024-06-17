import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Event from './components/Event'; // Ensure this path is correct
import LandingPage from './pages/LandingPage';
import MyTickets from './pages/MyTickets';
import MySavedEvents from './pages/MySavedEvents';
import SignInSignUp from './components/SignInSignUp'; // Ensure this path is correct
import UserProfile from './components/UserProfile'; // Ensure this path is correct
import ConcertsPage from './pages/ConcertsPage';
import FestivalsPage from './pages/FestivalsPage';
import ToursPage from './pages/ToursPage';
import WebSocket from './components/WebsocketComponent';
import Eventbrite from './components/Eventbrite';
import { AudioProvider } from './context/AudioContext';
import './App.scss';

const App = () => {
  return (
    <AudioProvider>
      <Router>
        <div id="root">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/events" element={<Event />} />
            <Route path="/events/concerts" element={<ConcertsPage />} />
            <Route path="/events/festivals" element={<FestivalsPage />} />
            <Route path="/events/tours" element={<ToursPage />} />
            <Route path="/my-tickets" element={<MyTickets />} />
            <Route path="/my-saved-events" element={<MySavedEvents />} />
            <Route path="/login" element={<SignInSignUp />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/websocket" element={<WebSocket />} />
            <Route path="/eventbrite" element={<Eventbrite />} />
          </Routes>
        </div>
      </Router>
    </AudioProvider>
  );
};

export default App;






