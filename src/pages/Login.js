import React, {Component} from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from '../components/login/LoginForm';
import SignUp from '../components/login/signup'
//import LoginFooter from '../components/login/LoginFooter';
import '../css/Main.css';

class Login extends Component {
    render(){
        return  (
            <div className="main-login-container">
                <div className="header-top">
                <Route exact path="/login" component={LoginForm} />
                <Route exact path="/signup" Component={SignUp} />
                </div>
                
                

            </div>
        );
    }
}

export default Login;


//Logo
