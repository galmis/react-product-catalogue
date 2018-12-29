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

function stripHTMLTags(htmlStr: string) {
  return htmlStr.replace(/<(?:.|\n)*?>/gm, '');
}

const Post = (props: Object) => {

  const {post, isLoading} = props;
  const {excerpt} = post;
  const description = excerpt && excerpt.rendered ? stripHTMLTags(excerpt.rendered) : '';
  const title = post.title.rendered;

  return (
    <div>
      <FancyHeader title={title} />
      <Helmet>
        <title>{title + ' | bukitesveiki.lt'}</title>
        <meta name='keywords' content={`bukitesveiki.lt,${title}`} />
        description && <meta name='description' content={description} />
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
