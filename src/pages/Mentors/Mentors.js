import React, {Component} from 'react';
import {Navigation} from '../../components';
import {FooterPage} from '../../components/FooterPage';
import {Link} from 'react-router-dom';
export default class Mentor extends Component{
    render(){
        return(
            <div>
            <Navigation/>
            <div className="splash-container">
                <div class="splash">
                    <br/><br/><br/><br/>
                    <h1>Know your Mentors</h1>
                    <p></p>
                </div>
            </div>
            <FooterPage/>
            </div>
        )
    }
}