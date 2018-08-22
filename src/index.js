import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker'
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'popper.js/dist/popper.min'

import './css/site.css'


ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ),  document.getElementById('root'));

registerServiceWorker();