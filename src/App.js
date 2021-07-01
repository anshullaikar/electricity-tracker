import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Dashboard from './components/Dashboard';
import Items from './components/Items';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
          <Route exact path="/">
            <Dashboard/>
          </Route>
          <Route path="/items">
            <Items />
          </Route>
          <Route path="/dashboard">
            {/* <Dashboard /> */}
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
