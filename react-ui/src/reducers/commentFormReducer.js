// @flow

import type { Action } from '../types';
import {
  FETCH_DATA_ERROR,
  CREATE_COMMENT,
  CREATE_COMMENT_SUCCESS,
  DISMISS_COMMENT_FORM_STATUS
} from '../constants/ACTION_TYPE';

function commentFormReducer(state: Object, action: Action) {
  switch(action.type) {

    case FETCH_DATA_ERROR: {
      if (action.payload.prevAction.type === CREATE_COMMENT) {
        return {
          ...state,
          status: action.payload.status,
          submitting: false
        };
      }
    }
    case CREATE_COMMENT: {
      return {
        ...state,
        submitting: true
      };
    }
    case CREATE_COMMENT_SUCCESS: {
      return {
        ...state,
        status: action.payload.status,
        submitting: false
      }
    }
    case DISMISS_COMMENT_FORM_STATUS: {
      return {
        ...state,
        status: null
      }
    }
  }

  return state;
}

export default commentFormReducer;
