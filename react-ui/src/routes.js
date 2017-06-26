// @flow

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app/App';
import Home from './components/app/Home';
import ProductContainer from './components/products/ProductContainer.js';
import About from './components/about/About';
import BlogContainer from './components/blog/BlogContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path='produktai/:id' component={ProductContainer} />
    <Route path='apiemus' component={About} />
    <Route path='blogas' component={BlogContainer} />
  </Route>
);
