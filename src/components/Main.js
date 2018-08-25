import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './basic/Home';
import Registration from './basic/Registration';
import Login from './basic/Login';
import Resume from './basic/Resume';
import Work from './basic/Work';
import Education from './basic/Education';
import Publications from './basic/Publications';
import Papers from './basic/Papers';
import Books from './basic/Books';
import Conferences from './basic/Conferences';

import Questions from './admin/Questions';
import CreateBook from './admin/CreateBook';
import CreatePaper from './admin/CreatePaper';
import CreateConference from './admin/CreateConference';
import CreateWork from './admin/CreateWork';

class Main extends Component{ 
  render() { 
    return (
      <Switch>
        <Route exact path='/' component={Home}></Route>       
        <Route exact path='/registration' component={Registration}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/resume' component={Resume}></Route>
        <Route exact path='/education' component={Education}></Route>
        <Route exact path='/work' component={Work}></Route>
        <Route exact path='/publications' component={Publications}></Route>
        <Route exact path='/papers' component={Papers}></Route>
        <Route exact path='/books' component={Books}></Route>
        <Route exact path='/conferences' component={Conferences}></Route>

        <Route exact path='/me' component={Home}></Route>

        <Route exact path='/admin/questions' component={Questions}></Route>
        <Route exact path='/admin/books' component={CreateBook}></Route>
        <Route exact path='/admin/papers' component={CreatePaper}></Route>
        <Route exact path='/admin/confs' component={CreateConference}></Route>
        <Route exact path='/admin/users' component={Questions}></Route>
        <Route exact path='/admin/edu' component={Questions}></Route>
        <Route exact path='/admin/work' component={CreateWork}></Route>
      </Switch>
    )}
}

export default Main;