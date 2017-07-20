// @flow

import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'react-bootstrap';
import {goBack, push} from 'react-router-redux';

import FancyHeader from '../shared/FancyHeader';
import PostExcerpt from './PostExcerpt';
import Paginator from '../shared/Paginator';

class Blog extends React.Component {

  constructor(props: Object) {
    super(props);
  }

  componentDidMount() {
    debugger;
    this.props.actions.fetchPosts(this.props.selectedPage);
  }

  _renderPosts(posts: Array<Object>) {

    const itemsToRender = [];
    for (let i = 0; i < posts.length; i++) {
      itemsToRender.push(
        <PostExcerpt key={i} post={ posts[i] } />
      );
    }

    return itemsToRender;
  }

  _onPageSelect(selectedPage: number) {
    this.props.actions.push(`/blogas/psl/${selectedPage}`);

    if (Object.keys(this.props.fetchedPages).indexOf(selectedPage.toString()) === -1) {
      this.props.actions.fetchPosts(selectedPage);
    }
  }

  render() {
    return (
      <div>
        <FancyHeader title='Blogas' />

        <section>
          <Grid>
            { this._renderPosts(this.props.posts) }
            <Paginator totalPages={this.props.totalPages} activePage={this.props.selectedPage} onSelect={this._onPageSelect.bind(this)}/>
          </Grid>
        </section>
      </div>
    );
  }
};

Blog.propTypes = {
  posts: PropTypes.array.isRequired,
  totalPages: PropTypes.number.isRequired,
  selectedPage: PropTypes.number.isRequired,
  fetchedPages: PropTypes.object.isRequired
};

export default Blog;
