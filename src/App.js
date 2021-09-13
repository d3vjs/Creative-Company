import Home from './pages/Home/Home';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import Locations from './pages/Locations/Locations';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <AboutUs />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/locations" exact>
          <Locations />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
