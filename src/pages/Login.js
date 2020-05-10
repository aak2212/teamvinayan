import React, {Component} from 'react';
import styled from 'styled-components';
import LoginForm from '../components/login/LoginForm';
//import LoginFooter from '../components/login/LoginFooter';
import '../css/Main.css';

class Login extends Component {
    render(){
        return  (
            <div className="main-login-container">
                <div className="header-top">
                
                </div>
                <LoginForm/> 
                

            </div>
        );
    }
}

export default Login;


//Logo
