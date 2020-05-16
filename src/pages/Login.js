import React, {Component} from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from '../components/loginform/LoginForm';
import Signup from '../components/loginform/Signup';
//import LoginFooter from '../components/login/LoginFooter';
import ForgotPassword from '../components/loginform/ForgotPassword';
import '../css/Main.css';

class Login extends Component {
    render(){
        return  (
            <div className="main-login-container">
                <div className="header-top">
                <Route exact path="/login" component={LoginForm} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/forgotPassword" component={ForgotPassword}/>
                </div>
                
                

            </div>
        );
    }
}

export default Login;


//Logo
