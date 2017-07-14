// @flow

import { put, call, fork } from 'redux-saga/effects';

import type {
  Action,
  FetchCommentsAction,
  FetchPostsAction,
  CreateCommentAction,
  NormalizedData
} from '../../types';
import {
  FETCH_POSTS,
  FETCH_COMMENTS,
  CREATE_COMMENT
} from '../../constants/ACTION_TYPE';
import {
  fetchPostsSuccess,
  fetchCommentsSuccess,
  threadFetched,
  fetchDataError,
  fetchComments
} from '../creators/apiActions';
import { fetch } from '../../services/Api';
import { getNormalizedData } from '../../services/Normalizer';
import { COMMENTS, POSTS } from '../../constants/RESOURCE_REF';

function* fetchData(action: Action): Generator<*, *, *> {
  console.log(`fetch data requested, action = ${JSON.stringify(action)}`);

  try {
    const url = _getFetchUrl(action);
    const httpMethod = _getHttpMethod(action);
    const response: ?XMLHttpRequest = yield call(fetch, url, httpMethod);
    if (response) {
      if (response.statusText === 'OK') {
        const totalRecords = response.getResponseHeader('X-WP-Total');
        const totalPages = response.getResponseHeader('X-WP-TotalPages');
        let normalizedData = null;
        if (httpMethod === 'GET') {
          const data = Array.isArray(response.body) ? response.body : [response.body];
          normalizedData = yield call(getNormalizedData, data);
        }
        yield fork(_fetchDataSuccess, action, normalizedData, parseInt(totalRecords), parseInt(totalPages));

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

function* _fetchDataSuccess(action: Action, data: ?NormalizedData, totalRecords: number, totalPages: number): Generator<*, void, *> {

  if (action.type === FETCH_POSTS) {
    yield fork(_fetchPostsSuccess, action, data, totalRecords, totalPages);
  } else if (action.type === FETCH_COMMENTS) {
    yield fork(_fetchCommentsSuccess, action, data, totalRecords, totalPages);
  }

}

function *_fetchPostsSuccess(action: FetchPostsAction, data: ?NormalizedData, totalRecords: number, totalPages: number): Generator<*, void, *> {
  const {selectedPage, postId} = action.payload;
  yield put(fetchPostsSuccess(data, totalRecords, totalPages, selectedPage, postId));
}

function *_fetchCommentsSuccess(action: FetchCommentsAction, data: ?NormalizedData, totalRecords: number, totalPages: number): Generator<*, void, *> {

  let postId = _getPostId(action);
  postId = postId ? postId : '';

  yield put(fetchCommentsSuccess(data, postId, totalRecords, totalPages, action.payload.parentId));

  if (data) {
    for (let id of data.result) {
      let comment = data.entities.dataById[id];
      if (comment._links.children) {
        yield put(fetchComments(postId, comment.id, -1, 'desc')); // asc???!
      } else {
        // NOTE: not used!
        yield put(threadFetched(comment.id));
      }
    }
  }
}

function _getHttpMethod(action: Action): ?string {
  if (action.type === FETCH_COMMENTS || action.type === FETCH_POSTS || action.type === CREATE_COMMENT) {
    return action.payload.httpMethod;
  }
}

function _getFetchUrl(action: Action) {
  let url = 'http://localhost:8888/blogas/wp-json/wp/v2/';
  const resourceRef = _getResourceRef(action)
  url = `${url}${resourceRef}`;

  if (action.type === FETCH_POSTS) {
    return _getFetchPostsUrl(url, action);
  } else if (action.type === FETCH_COMMENTS) {
    return _getFetchCommentsUrl(url, action);
  } else if (action.type === CREATE_COMMENT) {
    return _getCreateCommentUrl(url, action);
  }

  return url;
}

function _getCreateCommentUrl(url: string, action: CreateCommentAction): string {

  const {postId, parentId, content, name, email} = action.payload;

  if (postId) {
    url = `${url}?post=${postId}`;
  }
  if (parentId >= 0) {
     url = `${url}&parent=${parentId}`;
  }
  if (content) {
    url = `${url}&content=${content}`;
  }
  if (email) {
    url = `${url}&author_email=${email}`;
  }
  if (name) {
    url = `${url}&author_name=${name}`;
  }

  return url;
}

function _getFetchPostsUrl(url: string, action: FetchPostsAction): string {
  const postId = action.payload.postId;
  if (postId) {
    url = `${url}/${postId}`;
  }
  const selectedPage = _getSelectedPage(action);
  if (selectedPage) {
    url = `${url}?page=${selectedPage}`;
  }

  return url;
}

function _getFetchCommentsUrl(url: string, action: FetchCommentsAction): string {

  const {postId, parentId, offset, order} = action.payload;

  if (postId) {
    url = `${url}?post=${postId}&per_page=5`;
  }
  if (parentId >= 0) {
     url = `${url}&parent=${parentId}`;
  }
  if (offset >= 0) {
    url = `${url}&offset=${offset}`;
  }
  if (order) {
    url = `${url}&order=${order}`;
  }

  return url;
}

function _getResourceRef(action: Action): string {
  if (action.type === FETCH_POSTS || action.type === FETCH_COMMENTS || action.type === CREATE_COMMENT) {
    return action.payload.resourceRef;
  }

  return POSTS;
}

function _getSelectedPage(action: Action) {
  if (action.type === FETCH_POSTS) {
    return action.payload.selectedPage;
  }
}

function _getPostId(action: Action) {
  if (action.type === FETCH_POSTS || action.type === FETCH_COMMENTS || action.type === CREATE_COMMENT) {
    return action.payload.postId;
  }
}

export {
  fetchData
}
