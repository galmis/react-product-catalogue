// @flow

import { put, call, fork } from 'redux-saga/effects';

import type { Action, NormalizedData } from '../../types';
import { FETCH_POSTS, FETCH_COMMENTS } from '../../constants/ACTION_TYPE';
import { POSTS } from '../../constants/RESOURCE_REF';
import { fetchPostsSuccess, fetchCommentsSuccess, fetchDataError } from '../creators/apiActions';
import { fetch } from '../../services/Api';
import { getNormalizedData } from '../../services/Normalizer';

function* fetchPosts(action: Action): Generator<*, *, *> {
  console.log(`fetch data requested, action = ${JSON.stringify(action)}`);

  try {
    const url = _getFetchUrl(action);
    const response: ?XMLHttpRequest = yield call(fetch, url);
    if (response) {
      if (response.statusText === 'OK') {
        const totalRecords = response.getResponseHeader('X-WP-Total');
        const totalPages = response.getResponseHeader('X-WP-TotalPages');
        const data = Array.isArray(response.body) ? response.body : [response.body];
        const normalizedData = yield call(getNormalizedData, data);
        if (normalizedData) {
          yield fork(_fetchDataSuccess, action, normalizedData, parseInt(totalRecords), parseInt(totalPages));
        } else {
          console.log(`Error - no data`);
          yield put(fetchDataError(`Error - no data`));
        }

      } else {
        console.log(`Error - ${response.status}`);
        yield put(fetchDataError(`Error - ${response.status}`));
      }
    } else {
      console.log('Error - no response');
      yield put(fetchDataError(`Error - no response`));
    }
  } catch(error) {
    yield put(fetchDataError(error.message));
  }
}

function* _fetchDataSuccess(action: Action, data: NormalizedData, totalRecords: number, totalPages: number) {

  if (action.type === FETCH_POSTS) {
    const selectedPage = _getSelectedPage(action);
    const postId = _getPostId(action);

    yield put(fetchPostsSuccess(data, totalRecords, totalPages, selectedPage, postId));
  } else if (action.type === FETCH_COMMENTS) {
    let postId = _getPostId(action);
    postId = postId ? postId : '';
    yield put(fetchCommentsSuccess(data, postId, totalRecords, totalPages));
  }

}

function _getFetchUrl(action: Action) {
  const apiURL = 'http://localhost:8888/blogas/wp-json/wp/v2/';
  const resourceRef = _getResourceRef(action);
  let url = apiURL;
  if (resourceRef) {
    url = `${url}${resourceRef}`;
  }
  const selectedPage = _getSelectedPage(action);
  if (selectedPage) {
    url = `${url}?page=${selectedPage}`;
  }
  const postId = _getPostId(action);
  if (postId) {
    url = `${url}?post=${postId}`;
  }

  return url;
}

function _getResourceRef(action: Action) {
  if (action.type === FETCH_POSTS || action.type === FETCH_COMMENTS) {
    return action.payload.resourceRef;
  }

  return 'posts';
}

function _getSelectedPage(action: Action) {
  if (action.type === FETCH_POSTS) {
    return action.payload.selectedPage;
  }
}

function _getPostId(action: Action) {
  if (action.type === FETCH_POSTS || action.type === FETCH_COMMENTS) {
    return action.payload.postId;
  }
}

export {
  fetchPosts
}
