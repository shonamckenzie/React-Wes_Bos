import React from 'react';
import { render } from 'react-dom'

import StorePicker from './components/StorePicker'

// render method takes the React component to be rendered & the DOM element it should be appended to, id main is defined in index.html.  aka mounting the application
// render method takes 2 parameters - JSX and the mounting point
render(<StorePicker/>, document.querySelector('#main'));