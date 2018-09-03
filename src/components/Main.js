import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

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
import createLanguage from './admin/languages/Create';
import updateLanguage from './admin/languages/Update';
import createSkill from './admin/skills/Create';
import updateSkill from './admin/skills/Update';

import AdminRoute from '../helpers/AdminRouter';

class Main extends Component{ 
  render() { 
    let decoded ='';
    if(localStorage.jwtToken){
      decoded = jwt_decode(localStorage.jwtToken);
    }

    return (
      <Switch>
        <Route exact path='/' component={Home}></Route>       
        <Route exact path='/registration' component={Registration}></Route>
        <Route exact path='/login' component={Login}></Route>
        
        <Route exact path='/resume' component={Resume}></Route>

        <Route exact path='/publications' component={Publications}></Route>
        
        <Route exact path='/admin/questions' component={Questions}></Route>

        <AdminRoute exact path='/admin/book' component={createBook} authed={decoded}></AdminRoute>
        <AdminRoute exact path='/admin/book/:id' component={updateBook} authed={decoded}></AdminRoute>
        <AdminRoute exact path='/admin/paper' component={createPaper} authed={decoded}></AdminRoute>
        <AdminRoute exact path='/admin/paper/:id' component={updatePaper} authed={decoded}></AdminRoute>
        <AdminRoute exact path='/admin/chapter' component={createChapter} authed={decoded}></AdminRoute>
        <AdminRoute exact path='/admin/chapter/:id' component={updateChapter} authed={decoded}></AdminRoute>
        <AdminRoute exact path='/admin/conf' component={createConference} authed={decoded}></AdminRoute>
        <AdminRoute exact path='/admin/conf/:id' component={updateConference} authed={decoded}></AdminRoute>
        <AdminRoute exact path='/admin/language' component={createLanguage} authed={decoded}></AdminRoute>
        <AdminRoute exact path='/admin/language/:id' component={updateLanguage} authed={decoded}></AdminRoute>
        <AdminRoute exact path='/admin/skill' component={createSkill} authed={decoded}></AdminRoute>
        <AdminRoute exact path='/admin/skill/:id' component={updateSkill} authed={decoded}></AdminRoute>
        
        <AdminRoute exact path='/admin/users' component={Questions} authed={decoded}></AdminRoute>
        <AdminRoute exact path='/admin/edu' component={CreateEducation} authed={decoded}></AdminRoute>
        <AdminRoute exact path='/admin/work' component={CreateWork} authed={decoded}></AdminRoute>
        <AdminRoute exact path='/admin/owner' component={CreateOwner} authed={decoded}></AdminRoute>
        
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