// @flow

import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Button} from 'react-bootstrap';
import { Link } from 'react-router';

const PostExcerpt = (props: Object) => {

  const { post } = props;

  // TODO: some security checks...
  const excerptHtml = post.excerpt.rendered;
  const postUrl = `/blogas/${post.id}/${post.slug}`;

  return (
    <div className="post-content-area">
      <Link to={postUrl}> <h3 className='space-top'> { post.title.rendered} </h3> </Link>
      <div dangerouslySetInnerHTML={ { __html: excerptHtml } } />
      <Link to={postUrl} className="btn btn-default-filled btn-rounded"><span>Skaityti daugiau</span><i className="fa fa-long-arrow-right"></i></Link>

      <div className="space-50">&nbsp;</div>
    </div>
  );
};

PostExcerpt.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostExcerpt;
