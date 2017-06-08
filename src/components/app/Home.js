// @flow

import React, { Component } from 'react';

import ProductsContainer from '../products/ProductsContainer';
import InfoCarousel from '../showcase/InfoCarousel';
//import HomeJumbo from '../showcase/HomeJumbo';

export default class Home extends Component {

  render() {
    return (
      <div>
        <InfoCarousel />
        <ProductsContainer />
      </div>
    );
  }

}
