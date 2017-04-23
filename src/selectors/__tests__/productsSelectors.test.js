// @flow

'use strict';

import deepFreeze from 'deep-freeze';

import {
  getAllProductsIds,
  getProductsById,
  getOrderedProducts,
  getProduct,
  getSelectedCategory,
  getNextProductId,
  getProductCategories,
  getProductsCategories,
  getFilteredProducts
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

it('tests getSelectedCategory', () => {
  const selectedCategory = 'foo';
  const state = {
    selectedCategory
  };
  deepFreeze(state);

  expect(getSelectedCategory(state)).toBe(selectedCategory);
});

it('tests getProduct', () => {
  const byId = { foo: 'bar' };
  const state = {
    byId
  };
  deepFreeze(state);

  expect(getProduct(state, 'foo')).toBe('bar');
});

it('tests getProductCategories', () => {
  const categories = [ 'a', 'lol' ];
  const byId = {
    foo: {
      categories
    }
  };
  const state = {
    byId
  };
  deepFreeze(state);

  expect(getProductCategories(state, 'foo')).toBe(categories);
});

it('tests getProductsCategories', () => {
  const allIds = ['0', '1', '2'];
  const productsById = {
    '0': {
      categories: ['a', 'b']
    },
    '1': {
      categories: []
    },
    '2': {
      categories: ['a', 'c']
    }
  };

  const expectedCategories = [ 'a', 'b', 'c' ];

  expect(getProductsCategories.resultFunc(allIds, productsById)).toEqual(expectedCategories);
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

it('tests getFilteredProducts', () => {
  const category = 'foo';
  const prod1 = {
    categories: ['foo', 'bar']
  };
  const prod2 = {
    categories: ['lol', 'bar']
  };
  const prod3 = {
    categories: ['meh', 'foo']
  };

  const orderedProducts = [
    prod1, prod2, prod3
  ];

  const expectedProds = [prod1, prod3];

  expect(getFilteredProducts.resultFunc(orderedProducts, category)).toEqual(expectedProds);
});
