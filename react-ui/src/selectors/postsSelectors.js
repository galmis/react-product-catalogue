// @flow

import { createSelector } from 'reselect';

import type { NormalizedData } from '../types';
import { getDenormalizedDataArray } from '../services/Normalizer';

function getPostsState(state: Object): Object {
  return state.postsReducer ? state.postsReducer : state;
}

function getPostsFromPage(state: Object, selectedPage: number) {

  const fetchedPagePosts: Array<string> = getFetchedPages(state)[selectedPage.toString()];
  const posts = [];

  if (fetchedPagePosts) {
    for (let i = 0; i < fetchedPagePosts.length; i++) {
      let p = getPost(state, fetchedPagePosts[i]);
      posts.push(p);
    }
  }

  return posts;
}

function getPostsById(state: Object): Object {
  return getPostsState(state).postsById;
}

function getPost(state: Object, id: string): ?Object {
  const post = getPostsById(state)[id];
  if (post) {
    return post;
  }

  return null;
}

function getTotalPosts(state: Object): number {
  return getPostsState(state).totalRecords;
}

function getTotalPostsPages(state: Object): number {
  return getPostsState(state).totalPages;
}

function getSelectedPage(state: Object): number {
  return getPostsState(state).selectedPage
}

function getFetchedPages(state: Object): Object {
  return getPostsState(state).fetchedPages;
}

function getIsLoading(state: Object): boolean {
  return getPostsState(state).isLoading
}

export {
  getPostsState,
  getPost,
  getTotalPosts,
  getTotalPostsPages,
  getSelectedPage,
  getFetchedPages,
  getPostsFromPage,
  getIsLoading
}
