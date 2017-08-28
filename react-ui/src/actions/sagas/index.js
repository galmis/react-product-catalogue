// @flow

import { takeLatest, all } from 'redux-saga/effects';

import { fetchData } from './apiSagas';
import { FETCH_POSTS, FETCH_COMMENTS, CREATE_COMMENT } from '../../constants/ACTION_TYPE';

export default function* rootSaga(): Generator<*, void, *> {
  yield all([
    takeLatest([FETCH_POSTS, FETCH_COMMENTS, CREATE_COMMENT], fetchData),
  ]);
}
