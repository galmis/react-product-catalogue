// @flow

'use strict';

import ACTION_TYPE from '../constants/ACTION_TYPE';

import type { Action } from '../types';

function filter(category: string): Action {

  return {
    type: ACTION_TYPE.FILTER,
    payload: {
      category
    }
  };
}

export {
  filter
}
