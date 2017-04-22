// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';

import reducers from './reducers';
import routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
// custom bootstrap theme
import './styles/bootstrap/css/bootstrap-yeti.min.css';
import './styles/index.css';

const rootReducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

const routingMiddleware = routerMiddleware(browserHistory);
const store = createStore(rootReducer, applyMiddleware(routingMiddleware));
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
