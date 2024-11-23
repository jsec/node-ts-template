import { expect, test } from 'vitest';

import { add } from '../src/index.js';

test('adds two numbers', () => {
  const result = add(1, 2);
  expect(result).to.equal(3);
});
