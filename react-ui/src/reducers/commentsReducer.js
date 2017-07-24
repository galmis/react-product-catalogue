// @flow

import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_SUCCESS,
  CREATE_COMMENT_SUCCESS,
  REPLY_COMMENT,
  THREAD_FETCHED
} from '../constants/ACTION_TYPE';
import type { Action, NormalizedData } from '../types';

const initialState: Object = {
  commentsById: {},
  totalComments: 0,
  totalPages: 0,
  fetchedThreads: {},
  createdThreads: {},
  loadingThreadsIds: [],
  fetchedPosts: {},
  commentToReplyId: 0,
  postId: '',
  lastReplyId: -1
};

export {
  initialState
}

export default function commentsReducer(state: Object = initialState, action: Action) {

  switch(action.type) {
    case FETCH_COMMENTS: {
      const { parentId, postId } = action.payload;
      let ids = state.loadingThreadsIds;
      let lastId = state.lastReplyId;
      if (parentId >= 0) {
        const threadId = parentId === 0 ? '0:'+postId : parentId.toString();
        if (ids.length === 0) {
          const thread = state.fetchedThreads[threadId];
          if (thread && thread.replies && thread.replies.length > 0) {
            lastId = thread.replies[thread.replies.length - 1];
          } else if (state.lastReplyId === -1) {
            lastId = 0;
          }
        }
        ids = ids.indexOf(threadId) === -1 ? [...ids, threadId] : ids;
      }

      return {
        ...state,
        lastReplyId: lastId,
        loadingThreadsIds: ids,
      }
    }
    case THREAD_FETCHED: {
      let ids = state.loadingThreadsIds;
      const lastId = ids.length === 0 ? -1 : state.lastReplyId;

      return {
        ...state,
        lastReplyId: lastId
      }
    }
    case FETCH_COMMENTS_SUCCESS: {

      const {postId, parentId, data} = action.payload;
      const fetchedThreads = { ...state.fetchedThreads };
      const totalComments = parentId >= 0 ? state.totalComments : action.payload.totalRecords;
      const totalPages = parentId >= 0 ? state.totalPages : action.payload.totalPages;
      let ids = state.loadingThreadsIds;

      if (parentId >= 0) {
        const threadId = parentId === 0 ? '0:' + postId : parentId.toString();
        ids = ids.filter(id => id !== threadId);
        const threadData = { ...fetchedThreads[threadId] };
        const currReplies = threadData.replies ? threadData.replies : [];
        const result = data ? data.result.filter(id => currReplies.indexOf(id) === -1) : [];

        fetchedThreads[threadId] = {
          replies: [...currReplies, ...result],
          totalReplies: action.payload.totalRecords,
        };
      }
      let commentsById = state.commentsById;
      if (data) {
        commentsById = {
          ...commentsById,
          ...action.payload.data.entities.dataById
        };
      }

      const newState =  {
        ...state,
        postId,
        fetchedThreads,
        totalComments,
        totalPages,
        commentsById,
        loadingThreadsIds: ids
      };

      return newState;
    }
    case REPLY_COMMENT: {
      return {
        ...state,
        commentToReplyId: action.payload.commentToReplyId
      }
    }
    case CREATE_COMMENT_SUCCESS: {
      const {postId, parentId, data} = action.payload;

      const result = data.result;
      const threadId = parentId === 0 ? '0:' + postId : parentId.toString();
      const createdThreads = { ...state.createdThreads };
      const threadData = createdThreads[threadId];
      const currReplies = threadData ? threadData.replies : [];
      const replies = parentId === 0 ? [...result, ...currReplies]
        : [...currReplies, ...result];

      createdThreads[threadId] = {
        replies
      }

      const commentsById = {
        ...state.commentsById,
        ...data.entities.dataById
      };

      return {
        ...state,
        totalComments: state.totalComments + 1,
        commentsById,
        createdThreads
      }
    }
  }

  return state;
}
