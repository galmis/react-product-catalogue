// @flow

import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';
import Home from './app/Home';
import Footer from './app/Footer';
import ProductThumbnail from './products/ProductThumbnail';
import Products from './products/Products';
import Product from './products/Product';

const comps = [App, Home, ProductThumbnail, Products, Product, Footer];

it('renders without crashing', () => {
  comps.forEach((comp) => {
    _testRendersWithoutCrash(comp);
  });
});

function _testRendersWithoutCrash(comp: Object) {
  const div = document.createElement('div');
  ReactDOM.render(<comp />, div);
}
