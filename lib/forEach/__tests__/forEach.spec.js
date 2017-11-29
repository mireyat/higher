const test = require('tape');
const forEach = require('..');

test('forEach function', (assert) => {
  assert.plan(4);
  assert.deepEqual(forEach([]), [], 'should take an empty array, and return an empty array');
  assert.deepEqual(forEach([1], (value) => value + 1), [2], 'should increment array values');
  assert.deepEqual(forEach([1, 2], (value) => value + 1), [2, 3], 'should increment array values');
  assert.deepEqual(forEach([1, 2, 3, 4, 5], (value) => value + 1), [2, 3, 4, 5, 6], 'should increment multiple values');
});
