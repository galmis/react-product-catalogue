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
          <title>Sveikatos patarimai - natūralūs Vision maisto papildai | bukitesveiki.lt</title>
          <meta name='description' content='Viskas, ko reikia sveikam žmogui - nuo sveikatos patarimų iki natūralių Vision maisto papildų.' />
          <meta name='keywords' content='natūralūs maisto papildai,Vision maisto papildai,sveikata,sveikas,žmogus,bukitesveiki.lt' />
        </Helmet>
        <InfoCarousel />
        <ProductsContainer />
      </div>
    );
  }

}
