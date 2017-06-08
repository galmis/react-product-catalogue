// @flow

'use strict';

import deepFreeze from 'deep-freeze';

import { getProductsState } from '../productsSelectors';

const reducerNameToGetterMap = {
  'productsReducer': getProductsState
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
