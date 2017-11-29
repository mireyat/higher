const test = require('tape');
const filter = require('..');

test('filter function', (assert) => {
	let nums = [1, 2, 3, 4];	

	assert.plan(4);
	assert.deepEqual(nums.filter(num => num === 0), [], 'Should take the "nums" array and return empty array');
	assert.deepEqual(nums.filter(num => num <= 2), [1, 2], 'Should take the "nums" array and return values less than or equal to 2');
	assert.deepEqual(nums.filter(num => num <= 3), [1, 2, 3], 'Should take the "nums" array and return values less than or equal to 3');
	assert.deepEqual(nums.filter(num => num <= 4), [1, 2, 3, 4], 'Should take the "nums" array and return values less than or equal to 4');
});