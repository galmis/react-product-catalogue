// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import CommentForm from './CommentForm';
import {createComment} from '../../actions/creators/apiActions';
import {dismissStatus} from '../../actions/creators/commentsUIActions';

import {
  getPostId,
  getCommentToReplyId
} from '../../selectors/commentsSelectors';
import {getCommentFormStatusCode} from '../../selectors/formSelectors';

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators({
      createComment,
      dismissStatus
    }, dispatch)
  }
}

function mapStateToProps(state: Object, routerProps: Object) {

  return {
    postId: getPostId(state),
    commentToReplyId: getCommentToReplyId(state),
    statusCode: getCommentFormStatusCode(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
