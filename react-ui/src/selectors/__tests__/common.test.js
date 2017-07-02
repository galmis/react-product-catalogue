// @flow

'use strict';

import deepFreeze from 'deep-freeze';

import { getProductsState } from '../productsSelectors';
import { getHistoryState } from '../historySelectors';
import { getPostsState } from '../postsSelectors';

const reducerNameToGetterMap = {
  'productsReducer': getProductsState,
  'historyReducer': getHistoryState,
  'postsReducer': getPostsState
};

it('tests getState', () => {

  Object.keys(reducerNameToGetterMap).forEach(reducerName => {
    _testGetState(reducerNameToGetterMap[reducerName], reducerName);
  });

});

function _testGetState(getStateFunc: ((state: Object) => Object), reducerName: ?string): void {

  const state = {
    foo: 'bar'
  };
  let expected = state;
  if (reducerName) {
    state[reducerName] = {
      reducerProp: 'works'
    }
    expected = state[reducerName];
  }
  deepFreeze(state);

  expect(getStateFunc(state)).toEqual(expected);
}
