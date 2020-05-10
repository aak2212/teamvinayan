import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FooterPage } from './components/FooterPage';
import { Navigation, Home, About, StartLearn} from "./components";
import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/login" exact component={() => <Login />} />
        </Switch>
        <FooterPage />

      </Router>
    </React.Fragment>
  );
}

export default App;
