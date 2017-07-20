// @flow
'use strict';

jest.dontMock('../postsReducer.js');

import postsReducer from '../postsReducer';
import deepFreeze from 'deep-freeze';

import type { FetchPostsSuccessAction } from '../../types';

import { FETCH_POSTS_SUCCESS } from '../../constants/ACTION_TYPE';

describe('postsReducer', () => {

  it('FETCH_POSTS_SUCCESS, initialState', () => {
    const action: FetchPostsSuccessAction = {
      type: FETCH_POSTS_SUCCESS,
      payload: {
        data: {
          result: ['1'],
          entities: {
            dataById: {
              '1': 'foo'
            }
          },
        },
        selectedPage: 2,
        totalRecords: 12,
        totalPages: 2
      }
    };
    deepFreeze(action);

    expect(postsReducer(undefined, action)).toMatchSnapshot();
  });

  it('FETCH_POSTS_SUCCESS, overwrite existing page', () => {
    const action: FetchPostsSuccessAction = {
      type: FETCH_POSTS_SUCCESS,
      payload: {
        data: {
          result: ['2', '3'],
          entities: {
            dataById: {
              '2': 'alio',
              '3': 'bar'
            }
          },
        },
        selectedPage: 1,
        totalRecords: 8,
        totalPages: 1
      }
    };
    deepFreeze(action);

    const oldState = {
      postsById: {
        '1': 'foo',
        '2': 'xyz'
      },
      totalRecords: 12,
      totalPages: 2,
      selectedPage: 1,
      fetchedPages: {
        '1': ['1', '2']
      }
    }
    deepFreeze(oldState);
    expect(postsReducer(oldState, action)).toMatchSnapshot();
  });


  it('FETCH_POSTS_SUCCESS, new page', () => {
    const action: FetchPostsSuccessAction = {
      type: FETCH_POSTS_SUCCESS,
      payload: {
        data: {
          result: ['3'],
          entities: {
            dataById: {
              '3': 'bar'
            }
          },
        },
        selectedPage: 2,
        totalRecords: 8,
        totalPages: 2
      }
    };
    deepFreeze(action);


    const oldState = {
      postsById: {
        '1': 'foo',
        '2': 'xyz'
      },
      totalRecords: 12,
      totalPages: 2,
      selectedPage: 1,
      fetchedPages: {
        '1': ['1', '2']
      }
    }
    deepFreeze(oldState);
    expect(postsReducer(oldState, action)).toMatchSnapshot();
  });

});
