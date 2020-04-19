import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../Home';
import Feed from '../Feed';
import AboutUs from '../AboutUs';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/feed">
            <Feed />
          </Route>
          <Route path="/sobre-nosotros">
            <AboutUs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
