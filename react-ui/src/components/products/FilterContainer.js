// @flow

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as filterActions from '../../actions/filterActions';

import Filter from './Filter';
import {
  getSelectedCategory,
  getProductsCategories
} from '../../selectors/productsSelectors';

function mapStateToProps(state: Object) {
  
  return {
    selectedCategory: getSelectedCategory(state),
    categories: getProductsCategories(state)
  }
}

function mapDispatchToProps(dispatch) {

  return {
    actions: bindActionCreators(filterActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
