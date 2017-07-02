// @flow

import { LOCATION_CHANGE } from 'react-router-redux';

import type { Action } from '../types';

const initialState = [];

export {
  initialState
}

export default function historyReducer(state: Array<string> = initialState, action: Action) {
  switch(action.type) {
    case LOCATION_CHANGE: {
      const p = action.payload;
      if (p.action === 'PUSH') {
        return [...state, p.pathname];
      } else if (p.action === 'POP') {
        const newState = [...state];
        const len = newState.length;
        if (len > 0) {
          newState.splice(len - 1, 1);
          return newState;
        }
      }
    }
  }

  return state;
}
