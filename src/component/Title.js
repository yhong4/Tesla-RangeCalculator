import React, {Component} from 'react';
import headImg from '../assets/logo.svg';

export default class Title extends Component {
    render(){
        return(
            <header className="header">
                <img src={headImg} alt="none"/>
            </header>
            )
    }
}