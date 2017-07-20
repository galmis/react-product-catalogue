// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Post from './Post';
import * as apiActions from '../../actions/creators/apiActions';
import { getPost, getIsLoading } from '../../selectors/postsSelectors';

import { POSTS } from '../../constants/RESOURCE_REF';

class PostContainer extends Component {

  constructor(props: Object) {
    super(props);
  }

  componentDidMount() {

    if (!this.props.post) {
      this.props.dispatch(apiActions.fetchPosts(undefined, this.props.params.id));
    }
  }

  render() {
    if (this.props.post) {
      return (
        <Post post={this.props.post}/>
      );
    }
    // could show spinner
    return(
      <div> </div>
    );
  }

}

function mapStateToProps(state: Object, routerProps: Object) {

  return {
    post: getPost(state, routerProps.params.id),
    isLoading: getIsLoading(state)
  }
}

PostContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(PostContainer);
