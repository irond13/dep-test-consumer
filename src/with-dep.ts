import {lodash as _} from 'dep-test-producer';

export const test = 42 * 2;

export const arr = [
  {a: 1, b: '1'},
  {a: 2, b: '2'}
];

export const indexBy = _.keyBy(arr,  'a'); // Should compile - keyBy exists in lodash@4.x.x