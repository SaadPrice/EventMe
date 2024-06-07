import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Events from './pages/Events.';
import './App.scss';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/events" component={Events} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

