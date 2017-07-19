// @flow

import type { Action } from '../types';
import {
  FETCH_DATA_ERROR,
  CREATE_COMMENT_SUCCESS,
  DISMISS_COMMENT_FORM_STATUS
} from '../constants/ACTION_TYPE';

function commentFormReducer(state: Object, action: Action) {
  switch(action.type) {
    case FETCH_DATA_ERROR: {
      return {
        ...state,
        status: action.payload.status
      };
    }
    case CREATE_COMMENT_SUCCESS: {
      return {
        ...state,
        status: action.payload.status
      }
    }
    case DISMISS_COMMENT_FORM_STATUS: {
      return {
        ...state,
        status: null
      }
    }
    default:
      return state;
  }
}

export default commentFormReducer;
