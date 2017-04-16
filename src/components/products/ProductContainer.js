// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Product from './Product';
import { getProduct } from '../../selectors/productsSelectors';

function mapStateToProps(state: Object, routerProps: Object) {
  return {
    product: getProduct(state, routerProps.params.id)
  }
}

export default connect(mapStateToProps)(Product);
