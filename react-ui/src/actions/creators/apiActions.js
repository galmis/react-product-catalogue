// @flow

import {
  FETCH_COMMENTS,
  FETCH_POSTS,
  FETCH_COMMENTS_SUCCESS,
  FETCH_POSTS_SUCCESS,
  FETCH_DATA_ERROR,
  THREAD_FETCHED,
  CREATE_COMMENT,
  CREATE_COMMENT_SUCCESS
} from '../../constants/ACTION_TYPE';
import { COMMENTS, POSTS } from '../../constants/RESOURCE_REF';

import type { Action, NormalizedData } from '../../types';

function fetchPosts(selectedPage: ?number, postId: ?string): Action {
  return {
    type: FETCH_POSTS,
    payload: {
      selectedPage,
      postId,
      httpMethod: 'GET',
      resourceRef: POSTS
    }
  };
}

function fetchComments(postId: string, parentId: number = -1, offset: number = -1, order: string = 'desc', httpMethod: string = 'GET'): Action {
  return {
    type: FETCH_COMMENTS,
    payload: {
      postId,
      parentId,
      httpMethod,
      offset,
      order,
      resourceRef: COMMENTS,
    }
  };
}

function createComment(content: string, postId: string, name: string,
  email: string, parentId: number = 0) {
  return {
    type: CREATE_COMMENT,
    payload: {
      postId,
      content,
      name,
      email,
      parentId,
      resourceRef: COMMENTS,
      httpMethod: 'POST'
    }
  }
}

function threadFetched() {
  return {
    type: THREAD_FETCHED,
    payload: null
  }
}

function fetchPostsSuccess(data: ?NormalizedData, totalRecords: number, totalPages: number, selectedPage: ?number){
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

function fetchCommentsSuccess(data: ?NormalizedData, postId: string, totalRecords: number, totalPages: number, parentId: number){
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: {
      data,
      postId,
      totalRecords,
      totalPages,
      parentId
    }
  }
}

function createCommentSuccess(data: NormalizedData, postId: string, parentId: number, status: number){
  return {
    type: CREATE_COMMENT_SUCCESS,
    payload: {
      data,
      postId,
      parentId,
      status
    }
  }
}

function fetchDataError(action: Action, status: number, errorMsg: ?string) {
  return {
    type: FETCH_DATA_ERROR,
    payload: {
      status,
      errorMsg,
      prevAction: action
    }
  }
}

export {
  fetchPosts,
  fetchComments,
  threadFetched,
  fetchPostsSuccess,
  fetchCommentsSuccess,
  fetchDataError,
  createComment,
  createCommentSuccess
}
