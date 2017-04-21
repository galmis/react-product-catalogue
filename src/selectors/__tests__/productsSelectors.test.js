// @flow

'use strict';

import deepFreeze from 'deep-freeze';

import {
  getAllProductsIds,
  getProductsById,
  getOrderedProducts,
  getProduct,
  getNextProductId
} from '../productsSelectors';

it('tests getProductsById', () => {
  const byId = { foo: 'bar' };
  const state = {
    byId
  };
  deepFreeze(state);

  expect(getProductsById(state)).toBe(byId);
});

it('tests getAllProductsIds', () => {
  const allIds = ['1', '2'];
  const state = {
    allIds
  };
  deepFreeze(state);

  expect(getAllProductsIds(state)).toBe(allIds);
});

it('tests getProduct', () => {
  const byId = { foo: 'bar' };
  const state = {
    byId
  };
  deepFreeze(state);

  expect(getProduct(state, 'foo')).toBe('bar');
});

it('tests getNextProductId', () => {
  const allIds = ['1', '3', '2'];
  const state = {
    allIds
  };
  deepFreeze(state);

  expect(getNextProductId(state, '1')).toBe('3');
  expect(getNextProductId(state, '2')).toBe('');
});

it('tests getOrderedProducts', () => {
  const allIds = ['0', '2'];
  const productsById = {
    '0': {
      id: '0',
      title: 'Detox',
      thumbText: 'Laba diena su vistiena'
    },
    '1': {
      id: '1',
      title: 'sup',
      thumbText: 'hello'
    },
    '2': {
      id: '2',
      title: 'hi',
      thumbText: 'tekstas'
    }
  };

  expect(getOrderedProducts.resultFunc(allIds, productsById)).toEqual([productsById['0'], productsById['2']]);
});
