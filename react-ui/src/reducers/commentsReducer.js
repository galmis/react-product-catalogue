// @flow

import { FETCH_COMMENTS_SUCCESS } from '../constants/ACTION_TYPE';
import type { Action, NormalizedData } from '../types';

const initialState: Object = {
  commentsById: {},
  totalRecords: 0,
  totalPages: 0,
  fetchedPosts: {}
};

export {
  initialState
}

export default function commentsReducer(state: Object = initialState, action: Action) {

  switch(action.type) {
    case FETCH_COMMENTS_SUCCESS: {
      debugger;
      const postId = action.payload.postId;
      const fetchedPosts = { ...state.fetchedPosts };
      fetchedPosts[postId] = action.payload.data.result;
      const newState =  {
        fetchedPosts,
        totalRecords: action.payload.totalRecords,
        totalPages: action.payload.totalPages,
        commentsById: {
          ...state.commentsById,
          ...action.payload.data.entities.dataById
        }
      };
      return newState;
    }
  }

  return state;
}
