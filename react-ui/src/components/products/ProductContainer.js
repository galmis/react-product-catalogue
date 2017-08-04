// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Product from './Product';
import {
  getProduct,
  getNextProductId,
  getProductSlug
} from '../../selectors/productsSelectors';
import {
  getHistoryState
} from '../../selectors/historySelectors';

function mapStateToProps(state: Object, routerProps: Object) {
  const id = routerProps.params.id;
  const nextId = getNextProductId(state, id);

  return {
    nextId,
    nextSlug: getProductSlug(state, nextId),
    product: getProduct(state, id),
    historyStack: getHistoryState(state)
  }
}

export default connect(mapStateToProps)(Product);
