// @flow

import { takeLatest, all } from 'redux-saga/effects';

import { fetchPosts } from './apiSagas';
import { FETCH_POSTS, FETCH_COMMENTS } from '../../constants/ACTION_TYPE';

export default function* rootSaga(): Generator<*, void, *> {
  yield all([
    // listen for when FETCH_POSTS action is dispatched and call fetchPosts saga
    takeLatest([FETCH_POSTS, FETCH_COMMENTS], fetchPosts),
  ]);
}
