// @flow
'use strict';

jest.dontMock('../productsReducer.js');

import productsReducer from '../productsReducer';
import deepFreeze from 'deep-freeze';

import { FILTER } from '../../constants/ACTION_TYPE';

describe('productsReducer', () => {

  it('FILTER, initialState', () => {
    const action = {
      type: FILTER,
      payload: {
        category: 'foo'
      }
    };
    deepFreeze(action);

    expect(productsReducer(undefined, action)).toMatchSnapshot();
  });

});
