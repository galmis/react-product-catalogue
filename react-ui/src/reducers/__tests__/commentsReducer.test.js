// @flow
'use strict';

jest.dontMock('../commentsReducer.js');

import commentsReducer from '../commentsReducer';
import deepFreeze from 'deep-freeze';

import type { Action } from '../../types';

import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_SUCCESS,
  REPLY_COMMENT,
  CREATE_COMMENT_SUCCESS,
  THREAD_FETCHED
} from '../../constants/ACTION_TYPE';

describe('commentsReducer', () => {

  it('FETCH_COMMENTS_SUCCESS, initialState', () => {
    const action: Action = {
      type: FETCH_COMMENTS_SUCCESS,
      payload: {
        data: {
          result: ['1'],
          entities: {
            dataById: {
              '1': {
                parent: 0,
                id: 1,
                post: 2,
                content: {
                  rendered: '<p>test</p>'
                }
              }
            }
          },
        },
        totalRecords: 1,
        totalPages: 1,
        parentId: 0,
        postId: '2'
      }
    };
    deepFreeze(action);

    expect(commentsReducer(undefined, action)).toMatchSnapshot();
  });


  it('FETCH_COMMENTS_SUCCESS, overwrite existing comment', () => {
    const action: Action = {
      type: FETCH_COMMENTS_SUCCESS,
      payload: {
        data: {
          result: ['1'],
          entities: {
            dataById: {
              '1': {
                parent: 0,
                id: 1,
                post: 2,
                content: {
                  rendered: '<p>new</p>'
                }
              }
            }
          },
        },
        totalRecords: 1,
        totalPages: 1,
        parentId: 0,
        postId: '2'
      }
    };
    deepFreeze(action);


    const oldState = {
      commentsById: {
        '1': {
          parent: 0,
          id: 1,
          post: 2,
          content: {
            rendered: '<p>existing</p>'
          }
        }
      },
      totalComments: 1,
      totalPages: 1,
      fetchedThreads: {
        '0:2': {
          replies: ['1'],
          totalReplies: 1
        }
      },
      createdThreads: {},
      fetchedPosts: {},
      commentToReplyId: 0,
      postId: '2',
      loadingThreadsIds: []
    }
    deepFreeze(oldState);

    expect(commentsReducer(oldState, action)).toMatchSnapshot();
  });

  it('REPLY_COMMENT', () => {
    const action: Action = {
      type: REPLY_COMMENT,
      payload: {
        commentToReplyId: 1
      }
    };
    deepFreeze(action);

    const oldState = {
      commentsById: {
        '1': {
          parent: 0,
          id: 1,
          post: 2,
          content: {
            rendered: '<p>existing</p>'
          }
        }
      },
      totalComments: 1,
      totalPages: 1,
      fetchedThreads: {
        '0:2': {
          replies: ['1'],
          totalReplies: 1
        }
      },
      createdThreads: {},
      fetchedPosts: {},
      commentToReplyId: 0,
      postId: '2'
    }
    deepFreeze(oldState);

    expect(commentsReducer(oldState, action)).toMatchSnapshot();
  });

  it('CREATE_COMMENT_SUCCESS', () => {
    const action: Action = {
      type: CREATE_COMMENT_SUCCESS,
      payload: {
        data: {
          result: ['2'],
          entities: {
            dataById: {
              '2': {
                parent: 0,
                id: 2,
                post: 2,
                content: {
                  rendered: '<p>new</p>'
                }
              }
            }
          },
        },
        parentId: 0,
        postId: '2',
        status: 201
      }
    };
    deepFreeze(action);

    const oldState = {
      commentsById: {
        '1': {
          parent: 0,
          id: 1,
          post: 2,
          content: {
            rendered: '<p>existing</p>'
          }
        }
      },
      totalComments: 1,
      totalPages: 1,
      fetchedThreads: {
        '0:2': {
          replies: ['1'],
          totalReplies: 1
        }
      },
      createdThreads: {},
      fetchedPosts: {},
      commentToReplyId: 0,
      postId: '2'
    }
    deepFreeze(oldState);

    expect(commentsReducer(oldState, action)).toMatchSnapshot();
  });

  it('FETCH_COMMENTS', () => {
    const action: Action = {
      type: FETCH_COMMENTS,
      payload: {
        parentId: 2,
        postId: '2',
        resourceRef: 'comments',
        httpMethod: 'GET',
        offset: -1,
        order: 'asc'
      }
    };
    deepFreeze(action);

    const oldState = {
      commentsById: {
        '1': {
          parent: 0,
          id: 1,
          post: 2,
          content: {
            rendered: '<p>existing</p>'
          }
        }
      },
      totalComments: 1,
      totalPages: 1,
      fetchedThreads: {
        '0:2': {
          replies: ['1'],
          totalReplies: 1
        }
      },
      createdThreads: {},
      fetchedPosts: {},
      commentToReplyId: 0,
      postId: '2',
      loadingThreadsIds: ['2'],
      lastReplyId: -1
    }
    deepFreeze(oldState);

    expect(commentsReducer(oldState, action)).toMatchSnapshot();
  });

  it('THREAD_FETCHED, stop loading', () => {
    const action: Action = {
      type: THREAD_FETCHED,
      payload: null
    };
    deepFreeze(action);

    const oldState = {
      commentsById: {
        '1': {
          parent: 0,
          id: 1,
          post: 2,
          content: {
            rendered: '<p>existing</p>'
          }
        }
      },
      totalComments: 1,
      totalPages: 1,
      fetchedThreads: {
        '0:2': {
          replies: ['1'],
          totalReplies: 1
        }
      },
      createdThreads: {},
      fetchedPosts: {},
      commentToReplyId: 0,
      postId: '2',
      loadingThreadsIds: [],
    }
    deepFreeze(oldState);

    expect(commentsReducer(oldState, action)).toMatchSnapshot();
  });

});
