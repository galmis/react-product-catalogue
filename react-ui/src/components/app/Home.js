// @flow

import React, { Component } from 'react';
import {Helmet} from "react-helmet";

import ProductsContainer from '../products/ProductsContainer';
import InfoCarousel from '../showcase/InfoCarousel';
//import HomeJumbo from '../showcase/HomeJumbo';

export default class Home extends Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Sveikatos patarimai - natūralūs maisto papildai | bukitesveiki.lt</title>
        </Helmet>
        <InfoCarousel />
        <ProductsContainer />
      </div>
    );
  }

}
