import Home from './pages/Home/Home';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs';

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
      </Switch>
    </Router>
  );
}

export default App;
