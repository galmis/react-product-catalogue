// @flow

import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'react-bootstrap';

import FancyHeader from '../shared/FancyHeader';
import Spinner from '../shared/Spinner';
import CommentsContainer from './CommentsContainer';

function _renderPost(rendered: string, id: number) {
  return (
    <div>
      <div dangerouslySetInnerHTML={ { __html: rendered } } />
      <div className="space-50">&nbsp;</div>
      <CommentsContainer postId={id.toString()}/>
    </div>
  );
}

const Post = (props: Object) => {

  const {post, isLoading} = props;

  return (
    <div>
      <FancyHeader title={post.title.rendered} />

      <section>
        <Grid>
          {
            isLoading
            ? <Spinner />
            : _renderPost(post.content.rendered, post.id)
          }
        </Grid>
      </section>
    </div>
  );
};

// Post.propTypes = {
//   posts: PropTypes.array.isRequired,
// };

export default Post;
