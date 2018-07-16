import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/home';
import Login from '../views/login';

const routes = (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/login" component={Login} />
    <Route path="/home" component={Home} />
  </Switch>
);

export default routes;
