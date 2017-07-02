// @flow

'use strict';

import {FILTER, FETCH_POSTS, FETCH_POSTS_SUCCESS} from './constants/ACTION_TYPE';

export type Product = {
  id: string, // also a route
  title: string,
  thumbText: string,
  articleFile: string,
  imgFile: string,
  categories: Array<string>
};

export type NormalizedData = {
  entities: { dataById: Object },
  result: Array<string>
};

export type ResourceRef = 'posts' | 'comments';

// posts
export type FetchPostsPayload = {
  resourceRef: ResourceRef,
  selectedPage: ?number,
  postId: ?string
};
export type FetchPostsAction = {
  type: 'FETCH_POSTS',
  payload: FetchPostsPayload
};
export type FetchPostsSuccessPayload = {
  data: NormalizedData,
  totalRecords: number,
  totalPages: number,
  selectedPage: ?number,
};
export type FetchPostsSuccessAction = {
  type: 'FETCH_POSTS_SUCCESS',
  payload: FetchPostsSuccessPayload
};

// comments
export type FetchCommentsPayload = {
  resourceRef: ResourceRef,
  postId: string
};
export type FetchCommentsAction = {
  type: 'FETCH_COMMENTS',
  payload: FetchCommentsPayload
};
export type FetchCommentsSuccessPayload = {
  data: NormalizedData,
  totalRecords: number,
  totalPages: number,
  postId: string,
};
export type FetchCommentsSuccessAction = {
  type: 'FETCH_POSTS_SUCCESS',
  payload: FetchCommentsSuccessPayload
};

// filter
export type FilterAction = {
  type: 'FILTER',
  payload: { category: string }
};

export type Action = FilterAction | FetchPostsAction | FetchCommentsAction | FetchPostsSuccessAction;
