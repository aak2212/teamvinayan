import React, { Component } from 'react';
import styled from 'styled-components';

import {Link} from 'react-router-dom';
import LoginString from './LoginStrings';
import firebase from '../../Services/firebase';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


//import FBlogo from ''
import {toast, ToastContainer} from 'react-toastify';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';



const regexp = RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);

const initState = {
    
    email: '',
    
}

class ForgotPassword extends Component {

    state = initState;
    //this.handleSubmit = this.handleSubmit.bind(this)
    handleEmailChange = e => {
        this.setState({
            email: e.target.value
        }); 
    };

    
    //validate
    validate = () => {
        let inputError = false;
        const errors = {
            emailError: '',
            
        }

        if(!this.state.email) {
            inputError = true;
            errors.emailError = 'Please enter a valid email'
        } else if(!this.state.email.match(regexp)) {
            inputError = true;
            errors.emailError = (
                <span style={{color: 'red'}}>Your email address must be valid</span>
            )
        }

      
        this.setState({
            ...errors
        })

        return inputError;
    };

    onSubmit = e => {
        e.preventDefault()

        const err = this.validate();
        if(!err) {
            this.setState(initState);
        }
    }

    componentDidMount(){
        if(localStorage.getItem(LoginString.ID)){
            this.setState({isLoading: false}, ()=>{
                this.setState({isLoading: false})
                //this.props.showToast(1,'Login success')
                this.props.history.push('./chat')
            })
        }else{
            this.setState({isLoading: false})
        }
    }
    
    async onSubmit(e){
        e.preventDefault();
        
        var auth = firebase.auth();
        var email = document.getElementById('email').value;
    
        if(email != "") {
          auth.sendPasswordResetEmail(email).then(async()=>{
            window.alert("Email has been sent to you, Please check and verfiy");
          })
          .catch(async(error)=>{
            var errorCode = error.code;
            var errorMessage = error.message;
    
            console.log(errorCode);
            console.log(errorMessage);
    
            window.alert("Message : " + errorMessage);
          });
        }
        else {
          window.alert("Please enter you email address");
        }
      }
    

    render() {
        return (
            <FormContainer>
                <div className="form-container">
                    <form>
                        <h1 style={{color: 'rgba(172, 172, 172)'}}align="center">Forgot Password?</h1>
                        <div className="input-container">
                            
                            <input 
                            className={this.state.emailError ? 'input-error input-empty' : 'input-empty'} 
                            type="email"  
                            required
                            onChange={this.handleEmailChange}
                            value={this.state.email}
                            />
                            <label>Email or Phone Number</label>
                            <span style={{color: '#db7302'}}>{this.state.emailError}</span>
                        </div>
                        <div className="input-container">
                          <Btn type="submit" onClick={e => this.onSubmit(e)}>Reset Password</Btn> 
                          
                        </div>
                        
                        <Link to="/help" className="need-help">
                            Need Help?
                        </Link>
                        <br/>
                        <br/>
                        <span style={{color: '#999'}}>New to Vinayan?</span><br />
                        <Link to="/signup" className="sign-up-text">
                            Sign up now
                        </Link>
                        
                    </form>
                </div>
            </FormContainer>
        )
    }
}

export default ForgotPassword;

//Form Container
const FormContainer = styled.div`
    display: grid;
    justify-content: center;
    position: relative;
    z-index: 5;

    .para {
        jusify-text: center;
    }
    .form-container {
        background: #343a40;
        position: realtive;
        width: 28.125rem;
        border-radius: 10px;
        padding: 2rem;
        margin-top: 6rem;
        margin-bottom: 3rem;
        margin: 4rem 0 7rem 0;
    }

    .input-container {
        display: grid;
        grid-template-columns: 1fr;
        margin-top: 2rem;

    }

    .input-empty {
        color: #fff;
        background: #333;
        border: 0;
        border-radius: 0.25rem;
        height: 3rem;
        padding: 0.9rem 1.25rem 0;
    }

    form div label {
        postion: absolute;
        top: 0.625rem;
        left: 1.25rem;
        poiner-events: none;
        color: #8a8a8a;
        font-size: 1rem;
        transition: transform 150ms ease-out, font-size 150ms ease-out;
    }

    form div {
        position: relative;
    }

    input focus ~ label {
        top: 0.475rem;
        font-size: 0.7rem;
    }
    
    input:focus {
        outline: none;
    }

    .input-error {
        border-bottom: 1px solid #db7302;

    }

    .need-help {
        text-decoration: none;
        color: #828282;
        margin-left: 0rem;
        font-size: 0.9rem;
    }

    .sign-up-text {
        font-size: 1.1rem;
        color: #fff;
        &:hover {
            text-decoration: underline;
        }
    }
`;

const Btn = styled.button`
    color: #fff;
    background: rgb(120, 185, 228);
    border: none;
    outline: none;
    padding: 0.8rem 1.3rem;
    border-radius: 0.125rem;
    font-size: 1rem;
    text-align: center;
    box-shadow: 0 1px 0 rgba(0,0,0,0.45);
    transition: opacity .2s ease-in;
    cursor: pointer;
    text-decoration: none;
    margin: 1rem 0;
`;