import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';

import store from '../store';

import Home from './basic/Home';
import Registration from './basic/Registration';
import Login from './basic/Login';
import Work from './work/Work';
import Education from './education/Education';
import Publications from './Publications';
import Papers from './papers/Papers';
import Books from './books/Books';
import Conferences from './conferences/Conferences';


class App extends Component{ 
  render() { 
    return (
      <Provider store = { store }>
        <div className="container-fluid">
          <Navigation />
          <div className="container">
            <Main />
          </div>
        </div>
      </Provider>      
    )}
}

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <NavLink className="navbar-brand" to="/">MyCV</NavLink>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to='/'>Home</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to='/education'>Education</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to='/work'>Work</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to='/publications'>Publications</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to='/papers'>Papers</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to='/books'>Books/Chapters</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to='/conferences'>Conferences</NavLink></li>
    </ul>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink className="nav-link" to="/registration">Sign Up</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">LogIn</NavLink>
     </li>
    </ul>
  </nav>
);


const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/registration' component={Registration}></Route>
    <Route exact path='/login' component={Login}></Route>
    <Route exact path='/education' component={Education}></Route>
    <Route exact path='/work' component={Work}></Route>
    <Route exact path='/publications' component={Publications}></Route>
    <Route exact path='/papers' component={Papers}></Route>
    <Route exact path='/books' component={Books}></Route>
    <Route exact path='/conferences' component={Conferences}></Route>
  </Switch>
);

export default App;