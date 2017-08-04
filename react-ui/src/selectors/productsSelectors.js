// @flow

import { createSelector } from 'reselect';
import type { Product } from '../types';

function getProductsState(state: Object) {
  return state.productsReducer ? state.productsReducer : state;
}

function getAllProductsIds(state: Object) {
  return getProductsState(state).allIds;
}

function getProductsById(state: Object) {
  return getProductsState(state).byId;
}

function getSelectedCategory(state: Object) {
  return getProductsState(state).selectedCategory;
}

function getProduct(state: Object, id: string): Product {
  return getProductsById(state)[id];
}

function getProductCategories(state: Object, id: string): Array<string> {
  return getProduct(state, id).categories;
}

function getProductSlug(state: Object, id: string): string {
  if (id && id !== '') {
    return getProduct(state, id).slug;
  }
  return '';
}

function getNextProductId(state: Object, currId: string) {
  const allIds = getAllProductsIds(state);
  const index = allIds.indexOf(currId);

  return (index + 1) < allIds.length ? allIds[index + 1] : '';
}

// NOTE: A selector is not recomputed unless one of its arguments change.
const getOrderedProducts = createSelector([getAllProductsIds, getProductsById], (allIds: Array<string>, productsById: Object): Array<Product> => {


  const orderedProds = [];
  allIds.forEach(id => {
    orderedProds.push(productsById[id]);
  });

  return orderedProds;
});

const getProductsCategories = createSelector([getAllProductsIds, getProductsById], (allIds: Array<string>, productsById: Object): Array<string> => {


  let allCategories = [];
  allIds.forEach(id => {
    const prodCategories = productsById[id].categories || [];
    allCategories = [...allCategories, ...prodCategories];
  });

  // flow complains, but this is ok...
  return [...new Set(allCategories)];
});

const getFilteredProducts = createSelector([getOrderedProducts, getSelectedCategory], (products: Array<Product>, category: string): Array<Product> => {

  const filteredProds = [];
  products.forEach(product => {

    if (product.categories.indexOf(category) >= 0) {
      filteredProds.push(product);
    }
  });

  return filteredProds;
});

export {
  getProductsState,
  getAllProductsIds,
  getSelectedCategory,
  getProductsById,
  getProduct,
  getOrderedProducts,
  getNextProductId,
  getProductCategories,
  getProductsCategories,
  getFilteredProducts,
  getProductSlug
}
