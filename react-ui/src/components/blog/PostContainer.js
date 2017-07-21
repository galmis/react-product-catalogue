// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Spinner from '../shared/Spinner';
import Post from './Post';
import {fetchPosts} from '../../actions/creators/apiActions';
import { getPost, getIsLoading } from '../../selectors/postsSelectors';

import { POSTS } from '../../constants/RESOURCE_REF';

class PostContainer extends Component {

  constructor(props: Object) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.selectedState.post) {
      this.props.dispatch(fetchPosts(undefined, this.props.params.id));
    }
  }

  render() {
    if (this.props.selectedState.post) {
      return (
        <Post {...this.props.selectedState}/>
      );
    }
    // could show spinner
    return(
      <Spinner />
    );
  }

}

function mapStateToProps(state: Object, routerProps: Object) {
  debugger;
  return {
    selectedState: {
      post: getPost(state, routerProps.params.id),
      isLoading: getIsLoading(state)
    }
  }
}

PostContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(PostContainer);
