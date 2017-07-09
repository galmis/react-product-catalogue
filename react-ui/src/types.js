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
  result: Array<string | number>
};
// export type FetchCommentsParams = {
//   httpMethod: string,
//   postId: string,
//   parentId: number,
// };
// export type FetchPostsParams = {
//   httpMethod: string,
//   selectedPage: ?number,
//   postId: ?string
// };
// export type RequestParams = FetchCommentsParams | FetchPostsParams;

// posts
export type FetchPostsPayload = {
  httpMethod: string,
  resourceRef: string,
  selectedPage: ?number,
  postId: ?string,
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
  resourceRef: string,
  postId: string,
  parentId: number,
  httpMethod: string,
  offset: number
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
  parentId: number
};
export type FetchCommentsSuccessAction = {
  type: 'FETCH_POSTS_SUCCESS',
  payload: FetchCommentsSuccessPayload
};
export type WPComment = {
  id: number,
  parent: number,
  post: number,
  author: number,
  author_name: string,
  status: string,
  type: string,
  content: Object,
  date: string,
  date_gmt: string
};
export type ThreadData = {
  totalReplies: number,
  fetchedReplies: Array<number>
};

// filter
export type FilterAction = {
  type: 'FILTER',
  payload: { category: string }
};

export type Action = FilterAction | FetchPostsAction | FetchCommentsAction | FetchPostsSuccessAction;
