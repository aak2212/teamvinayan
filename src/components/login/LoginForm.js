import React, { Component } from 'react';
import styled from 'styled-components';
import {Link, Route} from 'react-router-dom';

//import FBlogo from ''

const regexp = RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);

const initState = {
    checked: true, 
    email: '',
    password: '',
    emailError: '',
    passwordError: ''
}

class LoginForm extends Component {

    state = initState;

    handleEmailChange = e => {
        this.setState({
            email: e.target.value
        });
    };

    handlePasswordChange = e => {
        this.setState({
            password: e.target.value
        });
    };

    //validate
    validate = () => {
        let inputError = false;
        const errors = {
            emailError: '',
            passwordError: ''
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

        if(this.state.password.length < 4) {
            inputError = true;
            errors.passwordError = "Your password must contain between 4 to 32 characters"
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

    //Checkbox
    handlerCheckbox = e => {
        this.setState({
            checked: e.target.checked
        });
    };

    render() {
        return (
            <FormContainer>
                <div className="form-container">
                    <form>
                        <h1 align="center">Sign In</h1>
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
                            <input className={this.state.passwordError ? 'input-error input-empty' : 'input-empty'} 
                            type="password" 
                            required 
                            onChange={this.handlePasswordChange}
                            value={this.state.password}
                            />
                            <label>Password</label>
                            <span style={{color: '#db7302'}}>{this.state.passwordError}</span>
                        </div>
                        <div className="input-container">
                          <Btn type="submit" onClick={e => this.onSubmit(e)}>Sign In</Btn>  
                        </div>
                        <label className="checkbox-container">
                            
                            <input type="checkbox" defaultChecked={this.state.checked} onChange={this.handlerCheckbox} />
                            <span className="checkmark"></span>
                            Remember me
                        </label>
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

export default LoginForm;

//Form Container
const FormContainer = styled.div`
    display: grid;
    justify-content: center;
    position: relative;
    z-index: 5;


    .form-container {
        background: #343a40;
        position: realtive;
        width: 28.125rem;
        
        padding: 2rem;
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

    //Checkbox
    .checkbox-container {
        margin-left: -1.3rem;
        padding-left: 1.875rem;
        poisiton: relative;
        font-size: 0.9rem;
        color: #999;
        cursor: pointer;
    }

    .checkbox-container input {
        margin-right:0.2rem;
    }

    .checkbox-container .checkmark {
        display: inline;
        
        width: 1.1rem;
        height: 1.1rem;
        
        border-radius: 0.1rem;
        position: relative; 
    }
    .checkbox-container input:checked + .checkmark:after {
        position: relative;
        height: 0.25rem;
        width: 0.625rem;
        border-left: 2px solid #000;
        border-bottom: 2px solid #000;
        top: 25%;
        left: 21%;
        transform: rotate(-45deg);
    }

    .need-help {
        text-decoration: none;
        color: #828282;
        margin-left: 11.0rem;
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