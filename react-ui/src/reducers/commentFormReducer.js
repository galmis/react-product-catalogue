// @flow

import type { Action } from '../types';
import {
  FETCH_DATA_ERROR,
  CREATE_COMMENT_SUCCESS
} from '../constants/ACTION_TYPE';

function commentFormReducer(state: Object, action: Action) {
  switch(action.type) {
    case FETCH_DATA_ERROR: {
      debugger;
      return state;
    }
    default:
      return state;
  }
}

export default commentFormReducer;
