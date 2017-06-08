// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Product from './Product';
import {
  getProduct,
  getNextProductId
} from '../../selectors/productsSelectors';
import {
  getHistoryState
} from '../../selectors/historySelectors';

function mapStateToProps(state: Object, routerProps: Object) {
  const id = routerProps.params.id;

  return {
    product: getProduct(state, id),
    nextId: getNextProductId(state, id),
    historyStack: getHistoryState(state)
  }
}

export default connect(mapStateToProps)(Product);
