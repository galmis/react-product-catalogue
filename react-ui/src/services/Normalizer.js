// @flow

import { normalize, denormalize, schema } from 'normalizr';

import type { NormalizedData } from '../types';

function getNormalizedData(data: Array<Object>): NormalizedData {
  const schemaEntity = new schema.Entity('dataById');
  const listSchema = [ schemaEntity ];
  const normalizedData = normalize(data, listSchema);

  return normalizedData; 
}

function getDenormalizedDataArray(data: NormalizedData): Array<Object> {
  const schemaEntity = new schema.Entity('dataById');
  const mySchema = { data: [ schemaEntity ] };
  const denormalizedData = denormalize({ data: data.result }, mySchema, data.entities);

  return denormalizedData.data;
}

export {
  getNormalizedData,
  getDenormalizedDataArray
}
