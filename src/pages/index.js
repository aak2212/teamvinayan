import React, {Component} from 'react';
import { FooterPage } from './components/FooterPage';
import { Navigation, Home, About, StartLearn} from "./components";

class Main extends Component {
    render() {
        return (
            <Router>
                <Navigation />
                <Switch>
                <Route path="/" exact component={() => <Home />} />
                <Route path="/about" exact component={() => <About />} />
                <Route path="/startlearn" exact component={() => <StartLearn />} />
                </Switch>
                <FooterPage />

            </Router>
        );
    }
}

export default Main;