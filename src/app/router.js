import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router-dom';
import Main from '../views/main';


const Router = ({ history }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/main" component={Main} />
    </Switch>
  </ConnectedRouter>
);
Router.propTypes = {
  history: PropTypes.object.isRequired
};

export default Router;
