import {expect, test} from 'vitest';

import {add} from '../src';

test('adds two numbers', () => {
  const result = add(1, 2);
  expect(result).to.equal(3);
});
