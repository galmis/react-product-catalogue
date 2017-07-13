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
  return getParentsThreadsData(state)[parentId.toString()];
}

function getParentsThreadsData(state: Object) {
  return getCommentsState(state).parentsThreadData;
}

function getTopThreadId(state: Object): string {
  const postId = getPostId(state);

  return '0:' + postId;
}

function getCommentToReplyId(state: Object): number {
  return getCommentsState(state).commentToReplyId;
}

export {
  getCommentsState,
  getTotalComments,
  getTotalCommentsPages,
  getCommentsById,
  getComment,
  getPostId,
  getParentsThreadsData,
  getTopThreadId,
  getCommentToReplyId
}
