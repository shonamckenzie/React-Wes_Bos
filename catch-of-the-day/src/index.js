import React from 'react';
import { render } from 'react-dom'
import Router from './components/Router'
// import StorePicker from './components/StorePicker';
// import App from './components/App';
import './css/style.css'

// render method takes the React component to be rendered & the DOM element it should be appended to, id main is defined in index.html.  aka mounting the application
// render method takes 2 parameters - JSX and the mounting point
render(<Router/>, document.querySelector('#main'));
// render(<StorePicker/>, document.querySelector('#main'));