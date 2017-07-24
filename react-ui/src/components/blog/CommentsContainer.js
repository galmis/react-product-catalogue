// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { COMMENTS } from '../../constants/RESOURCE_REF';

import Comments from './Comments';
import {
  fetchComments,
  createComment
} from '../../actions/creators/apiActions';

import {
  replyComment
} from '../../actions/creators/commentsUIActions';

import {
  getTotalComments,
  getPostId,
  getCommentsById,
  getFetchedThreads,
  getCreatedThreads,
  getTopThreadId,
  getCommentToReplyId,
  getLastReplyId
} from '../../selectors/commentsSelectors';

class CommentsContainer extends Component {

  constructor(props: Object) {
    super(props);
  }

  componentDidMount() {
    const {postId, actions, selectedState} = this.props;
    const {fetchedThreads, topThreadId} = selectedState;

    //if (!fetchedThreads[topThreadId]) {
      actions.fetchComments(postId, -1, -1, undefined, 'HEAD');
      actions.fetchComments(postId, 0);
    //}
  }

  render() {
    const { actions, selectedState, postId } = this.props;
    return (
      <Comments {...actions} {...selectedState} postId={postId}/>
    );
  }

}


function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators({
      fetchComments,
      replyComment,
      createComment
    }, dispatch)
  }
}

function mapStateToProps(state: Object, routerProps: Object) {



  return {
    selectedState: {
      topThreadId: getTopThreadId(state, routerProps.postId),
      commentsById: getCommentsById(state),
      totalComments: getTotalComments(state),
      fetchedThreads: getFetchedThreads(state),
      createdThreads: getCreatedThreads(state),
      commentToReplyId: getCommentToReplyId(state),
      lastReplyId: getLastReplyId(state)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
