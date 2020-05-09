import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { FooterPage } from './components/FooterPage';
import { Navigation, Home, About, StartLearn} from "./components";
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/startlearn" exact component={() => <StartLearn />} />
        </Switch>
        <FooterPage />
      </Router>
    </React.Fragment>
  );
}

export default App;
