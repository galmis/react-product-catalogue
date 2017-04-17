// @flow

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app/App';
import Home from './components/app/Home';
import ProductContainer from './components/products/ProductContainer.js'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path='produktai/:id' component={ProductContainer} />
  </Route>
);
