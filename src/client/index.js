
import { render } from 'react-dom';
import React from 'react';
import App from '../shared/App';
import { BrowserRouter } from 'react-router-dom';
// import 'whatwg-fetch';

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
