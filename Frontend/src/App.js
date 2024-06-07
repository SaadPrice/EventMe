import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Events from './pages/Event';
import LandingPage from './pages/LandingPage';
import MyTickets from './pages/MyTickets';
import MySavedEvents from './pages/MySavedEvents';
import './App.scss';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/events" component={Events} />
          <Route path="/my-tickets" component={MyTickets} />
          <Route path="/my-saved-events" component={MySavedEvents} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

