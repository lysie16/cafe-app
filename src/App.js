import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Navbar } from './components/Navbar';
import { CafeHomePage } from './components/pages/CafeHomePage';
import { ShoppingCartPage } from './components/pages/ShoppingCartPage';
import { CoffeeDetailsPage } from './components/pages/CoffeeDetailsPage';

function App() {
  return (
    <Router>
     <Navbar /> 
    <Switch>
      <Route exact path="/">
        < CafeHomePage /> 
      </Route>
      <Route path="/cart">
          <ShoppingCartPage /> 
      </Route>
      <Route path="/coffee/:id">
        <CoffeeDetailsPage />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
