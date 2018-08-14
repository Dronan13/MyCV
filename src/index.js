import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker'
import App from './components/App';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/popper.js/dist/popper.min.js'

ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ),  document.getElementById('root'));

registerServiceWorker();