// @flow

jest.dontMock('../postsSelectors.js');

import {
  getPost,
  getTotalPosts,
  getTotalPostsPages,
  getSelectedPage,
  getPostsFromPage
} from '../postsSelectors';

const state = {
  postsById: {
    '1': 'bar',
    '2': 'foo',
    '12': 'xyz',
    '13': 'zyx'
  },
  totalRecords: 14,
  totalPages: 2,
  selectedPage: 2,
  fetchedPages: {
    '1': ['1', '2'],
    '2': ['12', '13']
  }
};

describe('postsSelectors', () => {

  it('getPost', () => {
    expect(getPost(state, '1')).toMatchSnapshot();
  });

  it('getTotalPosts', () => {
    expect(getTotalPosts(state)).toMatchSnapshot();
  });

  it('getTotalPostsPages', () => {
    expect(getTotalPostsPages(state)).toMatchSnapshot();
  });

  it('getSelectedPage', () => {
    expect(getSelectedPage(state)).toMatchSnapshot();
  });

  it('getPostsFromPage', () => {
    expect(getPostsFromPage(state, 1)).toMatchSnapshot();
  });

});
