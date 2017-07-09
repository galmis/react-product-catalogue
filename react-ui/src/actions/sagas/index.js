// @flow

import { takeEvery, all } from 'redux-saga/effects';

import { fetchData } from './apiSagas';
import { FETCH_POSTS, FETCH_COMMENTS } from '../../constants/ACTION_TYPE';

export default function* rootSaga(): Generator<*, void, *> {
  yield all([
    takeEvery([FETCH_POSTS, FETCH_COMMENTS], fetchData),
  ]);
}
