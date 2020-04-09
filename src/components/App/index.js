import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../Home';
import Feed from '../Feed';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/test">
            <Feed />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
