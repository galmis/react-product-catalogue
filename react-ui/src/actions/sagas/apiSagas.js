// @flow

import { put, call, fork, select } from 'redux-saga/effects';

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
  createCommentSuccess,
  threadFetched,
  fetchDataError,
  fetchComments
} from '../creators/apiActions';
import {change, untouch} from 'redux-form';
import {
  getCreatedThreadReplies
} from '../../selectors/commentsSelectors';
import { fetch } from '../../services/Api';
import { getNormalizedData } from '../../services/Normalizer';
import { COMMENTS, POSTS } from '../../constants/RESOURCE_REF';

function* fetchData(action: Action): Generator<*, *, *> {

  try {
    const url = yield call(_getFetchUrl, action);
    const httpMethod = _getHttpMethod(action);
    const response: ?XMLHttpRequest = yield call(fetch, url, httpMethod);
    
    if (response) {
      if (response.status >= 200 && response.status < 300) {
        const totalRecords = response.getResponseHeader('X-WP-Total');
        const totalPages = response.getResponseHeader('X-WP-TotalPages');
        let normalizedData = null;
        if (response.body) {
          const data = Array.isArray(response.body) ? response.body : [response.body];
          normalizedData = yield call(getNormalizedData, data);
        }
        yield fork(_fetchDataSuccess, action, normalizedData, parseInt(totalRecords), parseInt(totalPages), response.status);
      } else {
        yield put(fetchDataError(action, response.status));
      }
    } else {
      yield put(fetchDataError(action, -1, 'Error - no response'));
    }
  } catch(error) {
    yield put(fetchDataError(action, -1, error.message));
  }
}

function* _fetchDataSuccess(action: Action, data: ?NormalizedData, totalRecords: number, totalPages: number, status: number): Generator<*, void, *> {
  if (action.type === FETCH_POSTS) {
    yield fork(_fetchPostsSuccess, action, data, totalRecords, totalPages);
  } else if (action.type === FETCH_COMMENTS) {
    yield fork(_fetchCommentsSuccess, action, data, totalRecords, totalPages);
  } else if (action.type === CREATE_COMMENT) {
    const defaultData: NormalizedData = {
      entities: {},
      result: []
    }
    yield fork(_createCommentSuccess, action, data ? data : defaultData, status);
  }
}

function *_createCommentSuccess(action: CreateCommentAction, data: NormalizedData, status: number): Generator<*, void, *> {
  let postId = _getPostId(action);
  postId = postId ? postId : '';

  yield put(createCommentSuccess(data, postId, action.payload.parentId, status));
  yield put(change('commentForm', 'comment', null));
  yield put(untouch('commentForm', 'comment'));
}

function *_fetchPostsSuccess(action: FetchPostsAction, data: ?NormalizedData, totalRecords: number, totalPages: number): Generator<*, void, *> {
  const {selectedPage, postId} = action.payload;
  yield put(fetchPostsSuccess(data, totalRecords, totalPages, selectedPage));
}

function *_fetchCommentsSuccess(action: FetchCommentsAction, data: ?NormalizedData, totalRecords: number, totalPages: number): Generator<*, void, *> {

  let postId = _getPostId(action);
  postId = postId ? postId : '';

  const { parentId } = action.payload;

  yield put(fetchCommentsSuccess(data, postId, totalRecords, totalPages, parentId));

  let counter = 0;
  if (data) {
    for (let id of data.result) {
      let comment = data.entities.dataById[id];
      if (comment._links.children) {
        yield put(fetchComments(postId, comment.id, -1, 'asc'));
        counter++;
      }
    }
    if (!counter) {
      yield put(threadFetched());
    }
  }

}

function _getHttpMethod(action: Action): ?string {
  if (action.type === FETCH_COMMENTS || action.type === FETCH_POSTS || action.type === CREATE_COMMENT) {
    return action.payload.httpMethod;
  }
}

function *_getFetchUrl(action: Action): Generator<*, string, *> {
  let url = 'http://wpblogas.x10host.com/wp-json/wp/v2/';
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    url = 'http://localhost:8888/blogas/wp-json/wp/v2/';
  }
  const resourceRef = _getResourceRef(action)
  url = `${url}${resourceRef}`;
  if (action.type === FETCH_POSTS) {
    return _getFetchPostsUrl(url, action);
  } else if (action.type === FETCH_COMMENTS) {
    const actionUrl = yield call(_getFetchCommentsUrl, url, action);
    if (actionUrl) {
      return actionUrl;
    }
  } else if (action.type === CREATE_COMMENT) {
    const actionUrl = yield call(_getCreateCommentUrl, url, action);
    if (actionUrl) {
      return actionUrl;
    }
  }

  return url;
}

function *_getCreateCommentUrl(url: string, action: CreateCommentAction): Generator<*, string, *> {

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

function *_getFetchCommentsUrl(url: string, action: FetchCommentsAction): Generator<*, string, *>{

  const {postId, parentId, offset, order} = action.payload;
  const excludeIds = yield select(getCreatedThreadReplies, parentId);

  if (postId) {
    url = `${url}?post=${postId}&per_page=5`;
  }
  if (excludeIds && excludeIds.length > 0) {
    url = `${url}&exclude=${excludeIds.toString()}`;
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
