// @flow
'use strict';

jest.dontMock('../historyReducer.js');

import { LOCATION_CHANGE } from 'react-router-redux'

import historyReducer, { testObj } from '../historyReducer';
import deepFreeze from 'deep-freeze';

describe('historyReducer', () => {

  it('LOCATION_CHANGE - push', () => {
    const action = {
      type: LOCATION_CHANGE,
      payload: {
        action: 'PUSH',
        pathname: 'some/path'
      }
    };
    deepFreeze(action);

    expect(historyReducer(undefined, action)).toMatchSnapshot();
  });

  it('LOCATION_CHANGE - pop', () => {
    const action = {
      type: LOCATION_CHANGE,
      payload: {
        action: 'POP',
        pathname: 'some/path'
      }
    };
    deepFreeze(action);

    expect(historyReducer(undefined, action)).toMatchSnapshot();
  });

  it('LOCATION_CHANGE - default', () => {
    const action = {
      type: LOCATION_CHANGE,
      payload: {
        action: '',
        pathname: 'some/path'
      }
    };
    deepFreeze(action);

    expect(historyReducer(undefined, action)).toMatchSnapshot();
  });

});
