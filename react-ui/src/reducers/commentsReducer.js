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
  fetchedPosts: {},
  commentToReplyId: 0,
  postId: ''
};

export {
  initialState
}

export default function commentsReducer(state: Object = initialState, action: Action) {

  switch(action.type) {
    case FETCH_COMMENTS_SUCCESS: {

      const {postId, parentId, data} = action.payload;
      const fetchedThreads = { ...state.fetchedThreads };
      const totalComments = parentId >= 0 ? state.totalComments : action.payload.totalRecords;
      const totalPages = parentId >= 0 ? state.totalPages : action.payload.totalPages;

      if (parentId >= 0) {
        const threadId = parentId === 0 ? '0:' + postId : parentId.toString();
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
