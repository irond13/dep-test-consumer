import * as _ from 'lodash';

export const test = 42 * 2;

export const arr = [
  {a: 1, b: '1'},
  {a: 2, b: '2'}
];

export const indexBy = _.indexBy(arr,  'a');