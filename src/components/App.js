import React from 'react';

import { NavLink, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Work from './work/Work';
import Education from './education/Education';
import Publications from './Publications';
import Papers from './papers/Papers';
import Books from './books/Books';
import Conferences from './conferences/Conferences';


const App = () => (
  <div className="container-fluid">
    <Navigation />
    <div className="container">
      <Main />
    </div>
  </div>

);

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">Navbar</a>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to='/'>Home</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to='/education'>Education</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to='/work'>Work</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to='/publications'>Publications</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to='/papers'>Papers</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to='/books'>Books/Chapters</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to='/conferences'>Conferences</NavLink></li>
    </ul>
  </nav>
);


const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/education' component={Education}></Route>
    <Route exact path='/work' component={Work}></Route>
    <Route exact path='/publications' component={Publications}></Route>
    <Route exact path='/papers' component={Papers}></Route>
    <Route exact path='/books' component={Books}></Route>
    <Route exact path='/conferences' component={Conferences}></Route>
  </Switch>
);

export default App;