// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {push} from 'react-router-redux';

import Blog from './Blog';
import {
  fetchPosts,
  fetchPostsSuccess,
  fetchDataError
} from '../../actions/creators/apiActions';
import {
  getPostsFromPage,
  getTotalPostsPages,
  getSelectedPage,
  getFetchedPages,
  getIsLoading
} from '../../selectors/postsSelectors';

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators({
      push,
      fetchPosts,
      fetchPostsSuccess,
      fetchDataError
    }, dispatch)
  }
}

function mapStateToProps(state: Object, routerProps: Object) {

  let page;
  if (routerProps.params.selectedPage) {
    page = parseInt(routerProps.params.selectedPage);
  }
  const selectedPage = page ? page : getSelectedPage(state);

  return {
    selectedPage,
    posts: getPostsFromPage(state, selectedPage),
    totalPages: getTotalPostsPages(state),
    fetchedPages: getFetchedPages(state),
    isLoading: getIsLoading(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
