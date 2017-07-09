// @flow

import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'react-bootstrap';

import FancyHeader from '../shared/FancyHeader';
import CommentsContainer from './CommentsContainer';

const Post = (props: Object) => {

  const {post} = props;

  return (
    <div>
      <FancyHeader title={post.title.rendered} />

      <section>
        <Grid>
          <div dangerouslySetInnerHTML={ { __html: post.content.rendered } } />
          <div className="space-50">&nbsp;</div>
          <CommentsContainer postId={post.id.toString()}/>
        </Grid>
      </section>
    </div>
  );
};

// Post.propTypes = {
//   posts: PropTypes.array.isRequired,
// };

export default Post;
