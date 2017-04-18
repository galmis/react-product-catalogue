// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import reducers from './reducers';
import routes from './routes';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import './index.css';


// // Grab the state from a global variable injected into the server-generated HTML
// const preloadedState = window.__PRELOADED_STATE__;
//
// // Allow the passed state to be garbage-collected
// delete window.__PRELOADED_STATE__;
debugger;

const rootReducer = combineReducers({
  ...reducers,
  routing: routerReducer
});
console.log(`index.js, rootReducer: ${JSON.stringify(rootReducer)}`);

const store = createStore(rootReducer, applyMiddleware());
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
