// @flow

import {
  getDenormalizedDataArray,
  getNormalizedData
} from '../Normalizer';

describe('Normalizer tests', () => {

  it('tests getNormalizedData', () => {

    const normalizedData = {
      entities: {
        dataById: {
          '2': {
            id: '2',
            foo: 'bar'
          },
          '1': {
            id: '1',
            x: 'y'
          }
        }
      },
      result: ['2', '1']
    };

    const denormalizedData = [
      {
        id: '2',
        foo: 'bar'
      },
      {
        id: '1',
        x: 'y'
      }
    ];

    expect(getNormalizedData(denormalizedData))
      .toEqual(normalizedData);
  });

  it('tests getDenormalizedDataArray', () => {

    const normalizedData = {
      entities: {
        dataById: {
          '2': {
            id: '2',
            foo: 'bar'
          },
          '1': {
            id: '1',
            x: 'y'
          }
        }
      },
      result: ['2', '1']
    };

    const denormalizedData = [
      {
        id: '2',
        foo: 'bar'
      },
      {
        id: '1',
        x: 'y'
      }
    ];

    expect(getDenormalizedDataArray(normalizedData))
      .toEqual(denormalizedData);
  });

});
