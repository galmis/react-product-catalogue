// @flow

import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS
} from '../constants/ACTION_TYPE';
import { POSTS } from '../constants/RESOURCE_REF';
import type { Action, NormalizedData } from '../types';

const initialState: Object = {
  postsById: {},
  totalRecords: 0,
  totalPages: 0,
  selectedPage: 1,
  fetchedPages: {},
  isLoading: false
};

export {
  initialState
}

export default function postsReducer(state: Object = initialState, action: Action) {

  switch(action.type) {
    case FETCH_POSTS_SUCCESS: {
      const selectedPage = action.payload.selectedPage;
      const fetchedPages = { ...state.fetchedPages };
      fetchedPages[selectedPage] = action.payload.data.result;
      const newState =  {
        fetchedPages,
        selectedPage,
        isLoading: false,
        totalRecords: action.payload.totalRecords,
        totalPages: action.payload.totalPages,
        postsById: {
          ...state.postsById,
          ...action.payload.data.entities.dataById
        }
      };

      return newState;
    }
    case FETCH_POSTS: {
      return {
        ...state,
        isLoading: true
      }
    }
  }

  return state;
}
