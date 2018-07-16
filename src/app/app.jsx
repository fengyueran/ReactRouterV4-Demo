import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/home';
import Login from '../views/login';

export default function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </Fragment>
  );
}
