import React from 'react';

import { NavLink, Switch, Route } from 'react-router-dom';

import Heroes from './Heroes';
import Monsters from './Monsters';
import Dashboard from './Dashboard';

import CreateMonster from './CreateMonster';
import CreateHero from './CreateHero';

const App = () => (
  <div className="container">
    <Navigation />
    <Main />
  </div>

);

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to='/'>Dashboard</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to='/heroes'>Heroes</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to='/monsters'>Monsters</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to='/addhero'>Create Heroes</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to='/addmonster'>Create Monsters</NavLink></li>
    </ul>
  </nav>
);


const Main = () => (
  <Switch>
    <Route exact path='/' component={Dashboard}></Route>
    <Route exact path='/heroes' component={Heroes}></Route>
    <Route exact path='/addhero' component={CreateHero}></Route>
    <Route exact path='/addmonster' component={CreateMonster}></Route>
    <Route exact path='/monsters' component={Monsters}></Route>
  </Switch>
);

export default App;