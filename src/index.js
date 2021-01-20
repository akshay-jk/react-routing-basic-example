import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

import Header from "./components/pageTitle";
import welcomeNote from "./components/welcomeNote";
import contactMe from "./components/contactMe";
import myWork from "./components/myWork";
import indvWorks from './components/indvWorks'

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <div>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
      <NavLink to='/work'>Works</NavLink>
    </div>
    <Switch>
      <Route path='/' component={welcomeNote} exact={true} />
      <Route path='/contact' component={contactMe} />
      <Route path='/work' component={myWork} exact={true} />
      <Route path='/work/:id' component={indvWorks} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);