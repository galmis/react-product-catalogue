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

// error
export type FetchDataErrorPayload = {
  status: number,
  prevAction: Action
}
export type FetchDataErrorAction = {
  type: 'FETCH_DATA_ERROR',
  payload: FetchDataErrorPayload
};

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
export type CreateCommentPayload = {
  postId: string,
  content: string,
  name: string,
  email: string,
  parentId: number,
  excludeIds: Array<number>,
  resourceRef: 'comments',
  httpMethod: 'POST'
};
export type CreateCommentAction = {
  type: 'CREATE_COMMENT',
  payload: CreateCommentPayload
}
export type ReplyCommentPayload = {
  commentToReplyId: number,
};
export type ReplyCommentAction = {
  type: 'REPLY_COMMENT',
  payload: ReplyCommentPayload
};
export type FetchCommentsPayload = {
  resourceRef: string,
  postId: string,
  parentId: number,
  httpMethod: string,
  offset: number,
  order: string
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
  type: 'FETCH_COMMENTS_SUCCESS',
  payload: FetchCommentsSuccessPayload
};
export type DismissCommentFormStatusAction = {
  type: 'DISMISS_COMMENT_FORM_STATUS'
};
export type CreateCommentSuccessPayload = {
  data: ?NormalizedData,
  postId: string,
  parentId: number,
  status: number
};
export type CreateCommentSuccessAction = {
  type: 'CREATE_COMMENT_SUCCESS',
  payload: CreateCommentSuccessPayload
}

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
  replies: Array<number>
};

// filter
export type FilterAction = {
  type: 'FILTER',
  payload: { category: string }
};

export type Action = FilterAction | FetchPostsAction | FetchCommentsAction
| FetchPostsSuccessAction | ReplyCommentAction | CreateCommentAction
| FetchDataErrorAction | FetchCommentsSuccessAction | CreateCommentSuccessAction;
//| DismissCommentFormStatusAction;

export type CreateCommentActionCreator = (content: string, postId: string, name: string, email: string, parentId: ?number, excludeIds: ?Array<number>) => CreateCommentAction;
export type ReplyCommentActionCreator = (commentToReplyId: number) => ReplyCommentAction;
export type FetchCommentsActionCreator = (postId: string, parentId: ?number, offset: ?number, order: ?string, httpMethod: ?string) => FetchCommentsAction;
