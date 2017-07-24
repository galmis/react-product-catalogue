// @flow

import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Media, Button, Badge} from 'react-bootstrap';

import FancyHeader from '../shared/FancyHeader';
import Spinner from '../shared/Spinner';
import Comment from './Comment';
import CommentFormContainer from './CommentFormContainer';
import {COMMENTS} from '../../constants/RESOURCE_REF';
import {MAX_LEVEL} from '../../constants/COMMENTS_UI';

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
  lastReplyId: number,
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

function _renderShowMoreComp(fetchedThread: ThreadData, fetchComments: FetchCommentsActionCreator, postId: string, parentId: number, lastReplyId: number) {

  const {replies, totalReplies} = fetchedThread;
  const offset = replies.length;
  const count = totalReplies - offset;

  if (parentId > 0) {
    return (
     <Media>
        <Media.Left className='nested'></Media.Left>
        <Media.Body>
          {
            lastReplyId === replies[offset - 1]
            ? <strong>Kraunama...</strong>
            : <a onClick={() => _showMore(offset, fetchComments, postId, parentId)}>
                Rodyti daugiau ({count})
              </a>
          }
        </Media.Body>
      </Media>
    );
  }
  return (
    <div>
      {
        lastReplyId === replies[offset - 1]
        ? <strong>Kraunama...</strong>
        : <a onClick={() => _showMore(offset, fetchComments, postId, parentId)}>
            Rodyti daugiau ({count})
          </a>
      }
    </div>
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
function _renderComments(props: Props, threadId: string, level: number) {
  const { commentsById, fetchedThreads, fetchComments, postId, replyComment,
    commentToReplyId, createComment, createdThreads, lastReplyId } = props;

  const compsToRender = [];
  const fetchedThread = fetchedThreads[threadId];
  const createdThread = createdThreads[threadId];

  if ((fetchedThread || createdThread) && level <= MAX_LEVEL) {
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
            <Comment comment={comment} replyComment={level < MAX_LEVEL ? replyComment : null}
              fetchedThread={fetchedThreads[id]}/>
            {
              commentToReplyId === comment.id && createComment
              && <CommentFormContainer cancelReply={replyComment.bind({}, 0)} />
            }
            { _renderComments(props, id, level + 1) }
            {
              _shouldRenderShowMore(fetchedThreads[id])
                && _renderShowMoreComp(fetchedThreads[id], fetchComments, postId, comment.id, lastReplyId)

            }
          </Media.Body>
        </Media>
      );

      if (lastReplyId === replies[i]) {
        break;
      }
    }
    if (isTopLevel) {
      compsToRender.push(
        <div className='space-50' key='showMoreBtn'>
          {
          _shouldRenderShowMore(fetchedThreads[topThreadId])
            && _renderShowMoreComp(fetchedThreads[topThreadId], fetchComments, postId, 0, lastReplyId)
          }
        </div>
      );
    }
  }

  return compsToRender;
}

const Comments = (props: Props) => {

  const { totalComments, topThreadId, commentToReplyId, createComment, postId, lastReplyId } = props;

  return (
    <div>
      <h3>Komentarai ({totalComments})</h3>
      {
        commentToReplyId === 0 && createComment
        && <CommentFormContainer />
      }
      <Media.List>
        {
          lastReplyId
          ? _renderComments(props, topThreadId, 0)
          : <Spinner isTransparent={true}/>
        }
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
