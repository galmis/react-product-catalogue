// @flow

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Products from './Products';

import { getFilteredProducts } from '../../selectors/productsSelectors';

function mapStateToProps(state: Object) {
  debugger;
  return {
    products: getFilteredProducts(state)
  }
}

export default connect(mapStateToProps)(Products);
