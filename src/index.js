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
//import './styles/bootstrap/css/bootstrap-cosmo.min.css';

// inCart theme
import './styles/inCart/css/style.css';
import './styles/inCart/css/animate.css';
import './styles/inCart/css/owl.carousel.css';
import './styles/inCart/css/owl.theme.css';

import './styles/inCart/css/font-awesome.min.css';
import './styles/inCart/fonts/FontAwesome.otf';
import './styles/inCart/css/linear-icons.css';

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
