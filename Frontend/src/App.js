import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Events from './pages/Event';
import LandingPage from './pages/LandingPage';
import MyTickets from './pages/MyTickets';
import './App.scss';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/events" component={Events} />
          <Route path="/my-tickets" component={MyTickets} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
