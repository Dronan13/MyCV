import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './shared/Home';
import Registration from './shared/Registration/Registration';
import Login from './shared/Login/Login';
import Resume from './shared/Resume';
import Publications from './shared/Publications';

import Questions from './admin/Questions';

import CreateWork from './admin/work/CreateWork';
import CreateEducation from './admin/education/CreateEducation';
import CreateOwner from './admin/owners/CreateOwner';
import createBook from './admin/books/Create';
import updateBook from './admin/books/Update';
import createPaper from './admin/papers/Create';
import updatePaper from './admin/papers/Update';
import createChapter from './admin/chapters/Create';
import updateChapter from './admin/chapters/Update';
import createConference from './admin/conferences/Create';
import updateConference from './admin/conferences/Update';

class Main extends Component{ 
  render() { 
    return (
      <Switch>
        <Route exact path='/' component={Home}></Route>       
        <Route exact path='/registration' component={Registration}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/resume' component={Resume}></Route>
        <Route exact path='/publications' component={Publications}></Route>
        
        <Route exact path='/admin/questions' component={Questions}></Route>

        <Route exact path='/admin/book' component={createBook}></Route>
        <Route exact path='/admin/book/:id' component={updateBook}></Route>
        <Route exact path='/admin/paper' component={createPaper}></Route>
        <Route exact path='/admin/paper/:id' component={updatePaper}></Route>
        <Route exact path='/admin/chapter' component={createChapter}></Route>
        <Route exact path='/admin/chapter/:id' component={updateChapter}></Route>
        <Route exact path='/admin/conf' component={createConference}></Route>
        <Route exact path='/admin/conf/:id' component={updateConference}></Route>

        <Route exact path='/admin/users' component={Questions}></Route>
        <Route exact path='/admin/edu' component={CreateEducation}></Route>
        <Route exact path='/admin/work' component={CreateWork}></Route>
        <Route exact path='/admin/owner' component={CreateOwner}></Route>
      </Switch>
    )}
}
/*
import Work from './shared/Resume/Work';
import Header from './shared/Resume/Header';
import Education from './shared/Resume/Education';
import Papers from './shared/Publications/Papers';
import Books from './shared/Publications/Books';
import Conferences from './shared/Publications/Conferences';

        <Route exact path='/education' component={Education}></Route>
        <Route exact path='/work' component={Work}></Route>
        <Route exact path='/papers' component={Papers}></Route>
        <Route exact path='/books' component={Books}></Route>
        <Route exact path='/conferences' component={Conferences}></Route>
        <Route exact path='/owner' component={Header}></Route>
        <Route exact path='/me' component={Home}></Route>
*/
export default Main;