// @flow

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Products from './Products';
import Products2 from './Products2';

import { getFilteredProducts } from '../../selectors/productsSelectors';

function mapStateToProps(state: Object) {
  debugger;
  return {
    products: getFilteredProducts(state)
  }
}

export default connect(mapStateToProps)(Products2);
