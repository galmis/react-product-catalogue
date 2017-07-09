// @flow

import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Media, Button} from 'react-bootstrap';

import FancyHeader from '../shared/FancyHeader';
import Comment from './Comment';
import CommentForm from './CommentForm';
import {COMMENTS} from '../../constants/RESOURCE_REF';

import './Comments.css';

import type { ThreadData, WPComment } from '../../types';
type Props = {
  commentsById: Object,
  totalComments: number,
  topThreadId: string,
  threadsData: Object,
  fetchComments: Function,
  postId: string
};

const _showMore = (offset: number, fetchComments: Props.fetchComments, postId: string, parentId: number) => {

  fetchComments(postId, parentId, offset);
};

const _renderShowMoreComp = (threadData: ?ThreadData, fetchComments: Props.fetchComments, postId: string, parentId: number) => {

  if (threadData) {
    const offset = threadData.fetchedReplies.length;
    const count = threadData.totalReplies - offset;

    if (count > 0) {
      if (parentId > 0) {
        return (
         <Media>
            <Media.Left className='nested'></Media.Left>
            <Media.Body>
              <a onClick={() => _showMore(offset, fetchComments, postId, parentId)}>Rodyti daugiau ({count})</a>
            </Media.Body>
          </Media>
        );
      }
      return (
        <a onClick={() => _showMore(offset, fetchComments, postId, parentId)}>Rodyti daugiau ({count})</a>
      );
    }
  }
}

// NOTE:
// Defining a function inside the function component should be avoided, as a new
// function will be created every time the functional component is called.
function _renderComments(props: Props, threadId: string) {
  const { commentsById, threadsData, fetchComments, postId } = props;

  const compsToRender = [];
  const thread = threadsData[threadId];
  if (thread) {
    const topThreadId = `0:${postId}`;
    const isTopLevel = threadId === topThreadId;
    const replies = thread.fetchedReplies;
    for (let i = 0; i < replies.length; i++) {
      let id = replies[i].toString();
      let comment = commentsById[id];
      if (comment.status === 'approved') {
        compsToRender.push(
          <Media key={id}>
            <Media.Left className={ isTopLevel ? '' : 'nested' }></Media.Left>
            <Media.Body>
              <Comment comment={comment} threadData={threadsData[id]}/>
              { _renderComments(props, id) }
              { _renderShowMoreComp(threadsData[id], fetchComments, postId, comment.id) }
            </Media.Body>
          </Media>
        );
      }
    }
    if (isTopLevel) {
      compsToRender.push(
        <div className='space-50' key='showMoreBtn'>
          { _renderShowMoreComp(threadsData[topThreadId], fetchComments, postId, 0) }
        </div>
      );
    }
  }

  return compsToRender;
}

const Comments = (props: Props) => {

  const { totalComments, topThreadId } = props;



  return (
    <div>
      <h3>Komentarai ({totalComments})</h3>
      <CommentForm />
      <Media.List>
        { _renderComments(props, topThreadId) }
      </Media.List>

    </div>
  );
};

Comments.propTypes = {
  commentsById: PropTypes.object.isRequired,
  threadsData: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired
};

export default Comments;
