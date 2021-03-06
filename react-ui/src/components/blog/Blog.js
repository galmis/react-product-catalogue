// @flow

import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'react-bootstrap';
import {goBack, push} from 'react-router-redux';

import FancyHeader from '../shared/FancyHeader';
import PostExcerpt from './PostExcerpt';
import Paginator from '../shared/Paginator';
import Spinner from '../shared/Spinner';

class Blog extends React.Component {

  constructor(props: Object) {
    super(props);
  }

  componentDidMount() {
    const { fetchedPages, selectedPage } = this.props;
    if (this._shouldFetchPosts(fetchedPages, selectedPage)) {
      this.props.actions.fetchPosts(selectedPage);
    }
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

  _shouldFetchPosts(fetchedPages: Object, selectedPage: number): boolean {
    return Object.keys(fetchedPages).indexOf(selectedPage.toString()) === -1;
  }

  _onPageSelect(selectedPage: number) {
    this.props.actions.push(`/blogas/psl/${selectedPage}`);

    if (this._shouldFetchPosts(this.props.fetchedPages, selectedPage)) {
      this.props.actions.fetchPosts(selectedPage);
    }
  }

  _renderBlog() {

    const {posts, totalPages, selectedPage } = this.props;

    return (
      <section className='animated fadeIn'>
        <Grid>
          { this._renderPosts(posts) }
          <Paginator totalPages={totalPages} activePage={selectedPage} onSelect={this._onPageSelect.bind(this)}/>
        </Grid>
      </section>
    );
  }

  render() {

    const {isLoading} = this.props;

    return (
      <div>
        <FancyHeader title='Blogas' />
        {
          isLoading
          ? <Spinner />
          : this._renderBlog()
        }
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
