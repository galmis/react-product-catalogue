// @flow
'use strict';

jest.dontMock('../postsReducer.js');

import postsReducer from '../postsReducer';
import deepFreeze from 'deep-freeze';

import { FETCH_POSTS_SUCCESS } from '../../constants/ACTION_TYPE';

describe('postsReducer', () => {

  it('FETCH_POSTS_SUCCESS, initialState', () => {
    const action = {
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


  it('FETCH_POSTS_SUCCESS, existing state', () => {
    const action = {
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

});
