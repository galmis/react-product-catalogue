// @flow

'use strict';

import ACTION_TYPE from './constants/ACTION_TYPE';

export type Product = {
  id: string, // also a route
  title: string,
  thumbText: string,
  articleFile: string,
  imgFile: string,
  categories: Array<string>
};

export type Action = {
  type: ACTION_TYPE.FILTER,
  payload: { category: string } 
}
