import test from 'ava';
import { add } from '../src';

test('adds two numbers', t => {
    const result = add(1, 2);
    t.is(result, 3);
})

test.failing('should fail', t => {
    const result = add(1, 2);
    t.is(result, 4);
})
