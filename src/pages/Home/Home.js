import React, {Component} from 'react';
import {Navigation, About} from '../../components';
import {FooterPage} from '../../components/FooterPage';
import {Link} from 'react-router-dom';
export default class HomePage extends Component{
    render(){
        return(
            <div>
            <Navigation/>
            <div className="splash-container">
                <div class="splash">
                    <h1>Vinayan</h1>
                    <p></p>
                </div>
            </div>
            <FooterPage/>
            </div>
        )
    }
}