// @flow

'use strict';

import { FILTER } from '../../constants/ACTION_TYPE';

import type { Action } from '../../types';

function filter(category: string): Action {

  return {
    type: FILTER,
    payload: {
      category
    }
  };
}

export {
  filter
}
