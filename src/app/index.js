import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import Router from './router';


const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

const MOUNT_NODE = document.getElementById('root');
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history} />
    </Provider>,
    MOUNT_NODE
  );
};

export default render;
registerServiceWorker();
