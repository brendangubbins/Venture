import "./App.css";
import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";
import Dashboard from "./Dashboard/Dashboard";
import Discover from "./Discover/Discover";
import Results from "./Results/Results";
import About from "./About/About";
import Context from "./Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [userObject, setUserObject] = useState();
  const [yelpEvents, setYelpEvents] = useState([]);

  const globalStates = {
    userObject,
    setUserObject,
    yelpEvents,
    setYelpEvents,
  };

  return (
    <Context.Provider value={globalStates}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Landing />} />
          <Route exact path="/About" render={() => <About />} />
          <Route exact path="/Dashboard" render={() => <Dashboard />} />
          <Route exact path="/Discover" render={() => <Discover />} />
          <Route exact path="/Results" render={() => <Results />} />
        </Switch>
      </Router>
    </Context.Provider>
  );
}

export default App;
