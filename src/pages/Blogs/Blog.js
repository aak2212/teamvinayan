import React, {Component} from 'react';
import {Navigation} from '../../components';
import {FooterPage} from '../../components/FooterPage';
import {Link} from 'react-router-dom';
export default class Blog extends Component{
    render(){
        return(
            <div>
            <Navigation/>
            <div className="splash-container">
                <div class="splash">
                    <br/><br/><br/><br/>
                    <h1>Blogs</h1>
                    <p></p>
                </div>
            </div>
            <FooterPage/>
            </div>
        )
    }
}