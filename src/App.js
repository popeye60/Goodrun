import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Activity1 from "./components/Activity1";
import Apply from "./components/Apply";
import Info from "./components/Info";

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/activity1">Activity1</Link>
            </li>
            <li>
              <Link to="/apply">Apply</Link>
            </li>
            <li>
              <Link to="/info">Info</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/activity1">
            <Activity1 />
          </Route>
          <Route path="/apply">
            <Apply />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
