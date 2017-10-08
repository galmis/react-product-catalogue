// @flow

import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'react-bootstrap';
import {Helmet} from "react-helmet";

import FancyHeader from '../shared/FancyHeader';
import Spinner from '../shared/Spinner';
import CommentsContainer from './CommentsContainer';

function _renderPost(rendered: string, id: number) {
  return (
    <section className='animated fadeIn'>
      <Grid>
        <div dangerouslySetInnerHTML={ { __html: rendered } } />
        <div className="space-50">&nbsp;</div>
        <CommentsContainer postId={id.toString()}/>
      </Grid>
    </section>
  );
}

const Post = (props: Object) => {

  const {post, isLoading} = props;

  return (
    <div>
      <FancyHeader title={post.title.rendered} />
      <Helmet>
        <title>{post.title.rendered + ' | bukitesveiki.lt'}</title>
      </Helmet>
      {
        isLoading
        ? <Spinner />
        : _renderPost(post.content.rendered, post.id)
      }
    </div>
  );
};

// Post.propTypes = {
//   posts: PropTypes.array.isRequired,
// };

export default Post;
