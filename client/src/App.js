import "./App.css";
import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";
import Dashboard from "./Dashboard/Dashboard";
import Discover from "./Discover/Discover";
import Results from "./Results/Results";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Landing />} />
        <Route exact path="/Dashboard" render={() => <Dashboard />} />
        <Route exact path="/Discover" render={() => <Discover />} />
        <Route exact path="/Results" render={() => <Results />} />
      </Switch>
    </Router>
  );
}

export default App;
