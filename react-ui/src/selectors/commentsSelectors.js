// @flow

import type { NormalizedData, ThreadData, WPComment } from '../types';

function getCommentsState(state: Object): Object {
  return state.commentsReducer ? state.commentsReducer : state;
}

function getCommentsById(state: Object): Object {
  return getCommentsState(state).commentsById;
}

function getComment(state: Object, id: number): ?WPComment {
  const c = getCommentsById(state)[id.toString()];
  if (c) {
    return c;
  }

  return null;
}

function getTotalCommentsPages(state: Object): number {
  return getCommentsState(state).totalPages;
}

function getTotalComments(state: Object): number {
  return getCommentsState(state).totalComments;
}

function getPostId(state: Object): string {
  const postId = getCommentsState(state).postId;

  return postId ? postId : '';
}

function getParentThreadData(state: Object, parentId: number): ThreadData {
  return getFetchedThreads(state)[parentId.toString()];
}

function getFetchedThreads(state: Object) {
  return getCommentsState(state).fetchedThreads;
}

function getCreatedThreads(state: Object) {
  return getCommentsState(state).createdThreads;
}

function getTopThreadId(state: Object, postId: ?string): string {
  if (postId) {
    return '0:' + postId;
  }
  const selectedPostId = getPostId(state);
  return '0:' + selectedPostId;
}

function getCommentToReplyId(state: Object): number {
  return getCommentsState(state).commentToReplyId;
}

function getCreatedThreadReplies(state: Object, parentId: number): Array<number> {

  const threadId = parentId > 0 ? parentId.toString() : getTopThreadId(state);
  const thread = getCreatedThreads(state)[threadId];
  if (thread && thread.replies) {
    return thread.replies;
  }

  return [];
}

function getLastReplyId(state: Object) {
  return getCommentsState(state).lastReplyId;
}

export {
  getCommentsState,
  getTotalComments,
  getTotalCommentsPages,
  getCommentsById,
  getComment,
  getPostId,
  getFetchedThreads,
  getTopThreadId,
  getCommentToReplyId,
  getCreatedThreads,
  getCreatedThreadReplies,
  getLastReplyId
}
