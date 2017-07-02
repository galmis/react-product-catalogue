// @flow

import {
  FETCH_COMMENTS,
  FETCH_POSTS,
  FETCH_COMMENTS_SUCCESS,
  FETCH_POSTS_SUCCESS,
  FETCH_DATA_ERROR
} from '../../constants/ACTION_TYPE';

import type { Action, NormalizedData, ResourceRef } from '../../types';

function fetchPosts(resourceRef: ResourceRef, selectedPage: ?number, postId: ?string): Action {
  return {
    type: FETCH_POSTS,
    payload: {
      resourceRef,
      selectedPage,
      postId
    }
  };
}

function fetchComments(resourceRef: ResourceRef, postId: string): Action {
  return {
    type: FETCH_COMMENTS,
    payload: {
      resourceRef,
      postId
    }
  };
}

function fetchPostsSuccess(data: NormalizedData, totalRecords: number, totalPages: number, selectedPage: ?number){
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: {
      data,
      totalRecords,
      totalPages,
      selectedPage
    }
  }
}

function fetchCommentsSuccess(data: NormalizedData, postId: string, totalRecords: number, totalPages: number){
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: {
      data,
      postId,
      totalRecords,
      totalPages
    }
  }
}

function fetchDataError(errorMsg: string) {
  return {
    type: FETCH_DATA_ERROR,
    payload: {
      errorMsg
    }
  }
}

export {
  fetchPosts,
  fetchComments,
  fetchPostsSuccess,
  fetchCommentsSuccess,
  fetchDataError
}
