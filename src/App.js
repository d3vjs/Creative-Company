import Home from './pages/Home/Home';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';

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
      </Switch>
    </Router>
  );
}

export default App;
