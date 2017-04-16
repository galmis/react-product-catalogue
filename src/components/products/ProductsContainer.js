// @flow

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Products from './Products';
import { getOrderedProducts } from '../../selectors/productsSelectors';

// class ProductsContainer extends Component {
//
//   render() {
//     return (
//       <Products />
//     );
//   }
//
// }

function mapStateToProps(state: Object) {
  return {
    products: getOrderedProducts(state)
  }
}

// NOTE:
// export default connect(mapStateToProps)(ProductsContainer);
// galima ir sitaip, jei atkomentini ProductsContainer class

export default connect(mapStateToProps)(Products);
