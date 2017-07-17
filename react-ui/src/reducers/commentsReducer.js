// @flow

import {
  FETCH_COMMENTS_SUCCESS,
  CREATE_COMMENT_SUCCESS,
  REPLY_COMMENT
} from '../constants/ACTION_TYPE';
import type { Action, NormalizedData } from '../types';

const initialState: Object = {
  commentsById: {},
  totalComments: 0,
  totalPages: 0,
  fetchedThreads: {},
  createdThreads: {},
  commentToReplyId: 0
};

export {
  initialState
}

export default function commentsReducer(state: Object = initialState, action: Action) {

  switch(action.type) {
    case FETCH_COMMENTS_SUCCESS: {
      debugger;
      const {postId, parentId, data} = action.payload;
      const fetchedThreads = { ...state.fetchedThreads };
      const totalComments = parentId >= 0 ? state.totalComments : action.payload.totalRecords;
      const totalPages = parentId >= 0 ? state.totalPages : action.payload.totalPages;

      if (parentId >= 0) {
        const result = data ? data.result : [];
        const threadId = parentId === 0 ? '0:' + postId : parentId.toString();
        const threadData = fetchedThreads[threadId];
        const replies = threadData ? [...threadData.replies, ...result] : [...result];
        fetchedThreads[threadId] = {
          replies,
          totalReplies: action.payload.totalRecords,
        };
      }
      let commentsById;
      if (data) {
        commentsById = {
          ...state.commentsById,
          ...action.payload.data.entities.dataById
        };
      } else {
        commentsById = { ...state.commentsById };
      }

      const newState =  {
        ...state,
        postId,
        fetchedThreads,
        totalComments,
        totalPages,
        commentsById
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
      debugger;
      const {postId, parentId, data} = action.payload;
      const result = data.result;
      const threadId = parentId === 0 ? '0:' + postId : parentId.toString();
      const createdThreads = { ...state.createdThreads };
      const threadData = createdThreads[threadId];
      const replies = threadData ? [...threadData.replies, ...result] : [...result];

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
