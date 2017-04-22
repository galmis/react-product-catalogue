// @flow

import React, { Component } from 'react';

import ProductsContainer from '../products/ProductsContainer';
import InfoCarousel from '../carousel/InfoCarousel';
import InfoCarousel2 from '../carousel/InfoCarousel2';
import InfoCarousel3 from '../carousel/InfoCarousel3';

export default class Home extends Component {

  render() {
    return (
      <div>
        <InfoCarousel3 />
        <ProductsContainer />
      </div>
    );
  }

}
