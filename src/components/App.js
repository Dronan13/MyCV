import React, { Component } from 'react';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';

import store from '../helpers/store';
import setAuthToken from '../helpers/setAuthToken';
import setAuthUser from '../helpers/setAuthUser';
import { setCurrentUser, logoutUser } from '../actions/authentication';


import Navigation from './Navigation'
import Main from './Main'

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  setAuthUser({sub:decoded.sub, username:decoded.username, permissions:decoded.permissions})
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}

class App extends Component{ 
  render() { 
    return (    
      <Provider store = { store }>
        <div>         
            
            <div>
              <Navigation />          
            </div>

            <div>
              <Main />
            </div>

          
        </div>
      </Provider>      
    )}
}

export default App;