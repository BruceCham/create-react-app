import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from 'pages/Home'
import AboutPage from 'pages/About'
import module1Page from './module1'

export default function RouteConfigExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/home">link-home</Link>
          </li>
          <li>
            <Link to="/about">link-about</Link>
          </li>
          <li>
            <Link to="/module1">link-module1</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/module1" component={module1Page} />
        </Switch>
      </div>
    </Router>
  );
}
