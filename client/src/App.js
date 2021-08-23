import "./App.css";
import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";
import Discover from "./Discover/Discover";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Landing />} />
        <Route exact path="/Discover" render={() => <Discover />} />
      </Switch>
    </Router>
  );
}

export default App;
