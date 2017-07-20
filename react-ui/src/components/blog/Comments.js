// @flow

import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Media, Button, Badge} from 'react-bootstrap';

import FancyHeader from '../shared/FancyHeader';
import Comment from './Comment';
import CommentFormContainer from './CommentFormContainer';
import {COMMENTS} from '../../constants/RESOURCE_REF';

import './Comments.css';

import type {
  ThreadData,
  WPComment,
  CreateCommentPayload,
  FetchCommentsActionCreator
} from '../../types';

type Props = {
  commentsById: Object,
  totalComments: number,
  topThreadId: string,
  fetchedThreads: Object,
  createdThreads: Object,
  postId: string,
  commentToReplyId: number,
  fetchComments: FetchCommentsActionCreator, // TODO: create types for action creators
  createComment: Function,
  replyComment: (commentToReplyId: number) => void
};

function _shouldRenderShowMore(fetchedThread: ?ThreadData): boolean {
  if (fetchedThread) {
    const offset = fetchedThread.replies.length;
    const count = fetchedThread.totalReplies - offset;

    return count > 0;
  }

  return false;
}

function _showMore(offset: number, fetchComments: FetchCommentsActionCreator, postId: string, parentId: number) {
  fetchComments(postId, parentId, offset, parentId > 0 ? 'asc' : 'desc');
}

function _renderShowMoreComp(fetchedThread: ThreadData, fetchComments: FetchCommentsActionCreator, postId: string, parentId: number) {

    const offset = fetchedThread.replies.length;
    const count = fetchedThread.totalReplies - offset;

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

function _getReplies(isTopLevel, fetchedThread, createdThread) {
  let replies = fetchedThread && fetchedThread.replies
    ? fetchedThread.replies : [];
  if (createdThread && createdThread.replies) {
    if (isTopLevel) {
      replies = [...createdThread.replies, ...replies];
    } else {
      replies = [...replies, ...createdThread.replies];
    }
  }

  return replies;
}

// NOTE:
// Defining a function inside the function component should be avoided, as a new
// function will be created every time the functional component is called.
function _renderComments(props: Props, threadId: string) {
  const { commentsById, fetchedThreads, fetchComments, postId, replyComment,
    commentToReplyId, createComment, createdThreads } = props;

  const compsToRender = [];
  const fetchedThread = fetchedThreads[threadId];
  const createdThread = createdThreads[threadId];

  if (fetchedThread || createdThread) {
    const topThreadId = `0:${postId}`;
    const isTopLevel = threadId === topThreadId;
    const replies = _getReplies(isTopLevel, fetchedThread, createdThread);
    for (let i = 0; i < replies.length; i++) {
      let id = replies[i].toString();
      let comment = commentsById[id];
      compsToRender.push(
        <Media key={id}>
          <Media.Left className={ isTopLevel ? '' : 'nested' }></Media.Left>
          <Media.Body>
            <Comment comment={comment} replyComment={replyComment}
              fetchedThread={fetchedThreads[id]}/>
            {
              commentToReplyId === comment.id && createComment
              && <CommentFormContainer cancelReply={replyComment.bind({}, 0)} />
            }
            { _renderComments(props, id) }
            {
              _shouldRenderShowMore(fetchedThreads[id])
                && _renderShowMoreComp(fetchedThreads[id], fetchComments, postId, comment.id)

            }
          </Media.Body>
        </Media>
      );
    }
    if (isTopLevel) {
      compsToRender.push(
        <div className='space-50' key='showMoreBtn'>
          {
          _shouldRenderShowMore(fetchedThreads[topThreadId])
            && _renderShowMoreComp(fetchedThreads[topThreadId], fetchComments, postId, 0)
          }
        </div>
      );
    }
  }

  return compsToRender;
}

const Comments = (props: Props) => {

  const { totalComments, topThreadId, commentToReplyId, createComment, postId } = props;

  return (
    <div>
      <h3>Komentarai ({totalComments})</h3>
      {
        commentToReplyId === 0 && createComment
        && <CommentFormContainer />
      }
      <Media.List>
        { _renderComments(props, topThreadId) }
      </Media.List>

    </div>
  );
};

Comments.propTypes = {
  commentsById: PropTypes.object.isRequired,
  fetchedThreads: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  commentToReplyId: PropTypes.number.isRequired,
  createComment: PropTypes.func.isRequired,
  replyComment: PropTypes.func.isRequired,
  fetchComments: PropTypes.func.isRequired,
  totalComments: PropTypes.number.isRequired,
};

export default Comments;
