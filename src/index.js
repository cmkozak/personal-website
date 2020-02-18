import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sections from './App.js';
import Mobile from './Small.js';

newScreen();

//get the screen size and based on that it will change the look of the side sections
//call a new css script as well

function newScreen() {
    if(window.screen.width < 1000 || window.innerWidth < 1000) {
        var siteWidth = 375;
        var scale = 1;
        document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');
        ReactDOM.render(<Mobile />,document.getElementById("side-sections"));
    }else {
        ReactDOM.render(<Sections />, document.getElementById("side-sections"));
    }
}