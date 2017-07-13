// @flow

import {
  FETCH_COMMENTS_SUCCESS,
  THREAD_FETCHED,
  REPLY_COMMENT
} from '../constants/ACTION_TYPE';
import type { Action, NormalizedData } from '../types';

const initialState: Object = {
  commentsById: {},
  totalComments: 0,
  totalPages: 0,
  fetchedComments: {},
  parentsThreadData: {},
  commentToReplyId: 0
};

export {
  initialState
}

export default function commentsReducer(state: Object = initialState, action: Action) {

  switch(action.type) {
    case FETCH_COMMENTS_SUCCESS: {
      const postId = action.payload.postId;
      const parent = action.payload.parentId;
      const data = action.payload.data;
      const parentsThreadData = { ...state.parentsThreadData };
      const totalComments = parent >= 0 ? state.totalComments : action.payload.totalRecords;
      const totalPages = parent >= 0 ? state.totalPages : action.payload.totalPages;

      if (parent >= 0) {
        const result = data ? data.result : [];
        const threadId = parent === 0 ? '0:' + postId : parent.toString();
        const threadData = parentsThreadData[threadId];
        const fetchedReplies = threadData ? [...threadData.fetchedReplies, ...result] : [...result];
        parentsThreadData[threadId] = {
          fetchedReplies,
          totalReplies: action.payload.totalRecords,
        }
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
        parentsThreadData,
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
    case THREAD_FETCHED: {

    }
  }

  return state;
}
