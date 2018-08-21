import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './basic/Home';
import Registration from './basic/Registration';
import Login from './basic/Login';
import Work from './basic/Work';
import Education from './basic/Education';
import Publications from './basic/Publications';
import Papers from './basic/Papers';
import Books from './basic/Books';
import Conferences from './basic/Conferences';
import Questions from './admin/Questions';

class Main extends Component{ 
  render() { 
    return (
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/me' component={Home}></Route>
        <Route exact path='/registration' component={Registration}></Route>
        <Route exact path='/login' component={Login}></Route>

        <Route exact path='/education' component={Education}></Route>
        <Route exact path='/work' component={Work}></Route>
        <Route exact path='/publications' component={Publications}></Route>
        <Route exact path='/papers' component={Papers}></Route>
        <Route exact path='/books' component={Books}></Route>
        <Route exact path='/conferences' component={Conferences}></Route>

        <Route exact path='/admin/questions' component={Questions}></Route>
        <Route exact path='/admin/books' component={Questions}></Route>
        <Route exact path='/admin/papers' component={Questions}></Route>
        <Route exact path='/admin/confs' component={Questions}></Route>
        <Route exact path='/admin/users' component={Questions}></Route>
        <Route exact path='/admin/edu' component={Questions}></Route>
        <Route exact path='/admin/work' component={Questions}></Route>
      </Switch>
    )}
}

export default Main;