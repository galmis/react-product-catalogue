// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Product from './Product';
import {
  getProduct,
  getNextProductId
} from '../../selectors/productsSelectors';

function mapStateToProps(state: Object, routerProps: Object) {
  const id = routerProps.params.id;
  return {
    product: getProduct(state, id),
    nextId: getNextProductId(state, id)
  }
}

export default connect(mapStateToProps)(Product);
