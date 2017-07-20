// @flow

import { FETCH_POSTS_SUCCESS } from '../constants/ACTION_TYPE';
import { POSTS } from '../constants/RESOURCE_REF';
import type { Action, NormalizedData } from '../types';

const initialState: Object = {
  postsById: {},
  totalRecords: 0,
  totalPages: 0,
  selectedPage: 1,
  fetchedPages: {}
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
        totalRecords: action.payload.totalRecords,
        totalPages: action.payload.totalPages,
        postsById: {
          ...state.postsById,
          ...action.payload.data.entities.dataById
        }
      };

      return newState;
    }
  }

  return state;
}
