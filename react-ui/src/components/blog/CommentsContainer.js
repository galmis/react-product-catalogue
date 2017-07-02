// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { COMMENTS } from '../../constants/RESOURCE_REF';

import Comments from './Comments';
import {
  fetchComments,
  fetchCommentsSuccess,
  fetchDataError
} from '../../actions/creators/apiActions';
// import {
//   getCommentssFromPage,
//   getTotalCommentssPages,
//   getSelectedPage,
//   getFetchedPages
// } from '../../selectors/postsSelectors';

class CommentsContainer extends Component {

  constructor(props: Object) {
    super(props);
  }

  componentDidMount() {


    this.props.actions.fetchComments(COMMENTS, this.props.postId);
  }

  render() {
    
    return (
      <Comments />
    );
  }

}


function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators({
      fetchComments,
      fetchCommentsSuccess,
      fetchDataError
    }, dispatch)
  }
}

function mapStateToProps(state: Object, routerProps: Object) {


  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
