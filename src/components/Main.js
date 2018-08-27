import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './shared/Home';
import Registration from './shared/Registration/Registration';
import Login from './shared/Login/Login';
import Resume from './shared/Resume';
import Work from './shared/Resume/Work';
import Education from './shared/Resume/Education';
import Publications from './shared/Publications';
import Papers from './shared/Publications/Papers';
import Books from './shared/Publications/Books';
import Conferences from './shared/Publications/Conferences';

import Questions from './admin/Questions';
import CreateBook from './admin/CreateBook';
import CreatePaper from './admin/CreatePaper';
import CreateConference from './admin/CreateConference';
import CreateWork from './admin/CreateWork';
import CreateChapter from './admin/CreateChapter';
import CreateEducation from './admin/CreateEducation';
import CreateOwner from './admin/CreateOwner';

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
        <Route exact path='/admin/chapters' component={CreateChapter}></Route>
        <Route exact path='/admin/papers' component={CreatePaper}></Route>
        <Route exact path='/admin/confs' component={CreateConference}></Route>
        <Route exact path='/admin/users' component={Questions}></Route>
        <Route exact path='/admin/edu' component={CreateEducation}></Route>
        <Route exact path='/admin/work' component={CreateWork}></Route>
        <Route exact path='/admin/owner' component={CreateOwner}></Route>
      </Switch>
    )}
}

export default Main;