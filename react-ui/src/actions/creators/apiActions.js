// @flow

import {
  FETCH_COMMENTS,
  FETCH_POSTS,
  FETCH_COMMENTS_SUCCESS,
  FETCH_POSTS_SUCCESS,
  FETCH_DATA_ERROR,
  THREAD_FETCHED
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

function fetchComments(postId: string, parentId: number = -1, offset: number = -1, httpMethod: string = 'GET'): Action {
  return {
    type: FETCH_COMMENTS,
    payload: {
      postId,
      parentId,
      httpMethod,
      offset,
      resourceRef: COMMENTS
    }
  };
}

function threadFetched(childId: number) {
  return {
    type: THREAD_FETCHED,
    payload: {
      childId
    }
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
  threadFetched,
  fetchPostsSuccess,
  fetchCommentsSuccess,
  fetchDataError
}
