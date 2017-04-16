// @flow

import { createSelector } from 'reselect';

function getProductsState(state: Object) {
  return state.productsReducer ? state.productsReducer : state;
}

function getAllProductsIds(state: Object) {
  return getProductsState(state).allIds;
}

function getProductsById(state: Object) {
  return getProductsState(state).byId;
}

function getProduct(state: Object, id: string) {
  return getProductsById(state)[id];
}

// NOTE: A selector is not recomputed unless one of its arguments change.
const getOrderedProducts = createSelector([getAllProductsIds, getProductsById], (allIds: Array<string>, productsById: Object): Array<Object> => {

  const orderedProds = [];
  allIds.forEach(id => {
    orderedProds.push(productsById[id]);
  });

  return orderedProds;
});

export {
  getProductsState,
  getAllProductsIds,
  getProductsById,
  getProduct,
  getOrderedProducts
}
