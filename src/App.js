import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FooterPage } from './components/FooterPage';
//import { Navigation, Home, About} from "./components";
import './App.css';
import Login from './pages/Login';
import Signup from './components/loginform/Signup';
import Profile from './pages/Profile/Profile';
import Chat from './pages/Chat/Chat';
import {toast, ToastContainer} from 'react-toastify';
import Home from './pages/Home/Home';

class App extends Component{
  showToast = (type, message) =>{
    switch (type){
      case 0:
        toast.warning(message)
      break;
      case 1:
        toast.success(message)
        default:
          break;
    }
  }

  
  render(){
    return (
      <Router>
        <ToastContainer
        autoClose = {2000}
        hideProgressBar = {true}
        position = {toast.POSITION.BOTTOM_CENTER}
        />
        <Switch>
          <Route exact path="/" render = {props => <Home {...props}/>}/>
          <Route path="/login" render={props => <Login showToast={this.showToast}{...props}/>}/>
          <Route path="/profile" render={props => <Profile showToast={this.showToast}{...props}/>}/>
          <Route path="/signup" render={props => <Signup showToast={this.showToast}{...props}/>}/>
          <Route path="/chat" render={props => <Chat showToast={this.showToast}{...props}/>}/>
        </Switch>
      </Router>
    )
  }
}

export default App
