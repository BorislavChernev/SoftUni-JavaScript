let { assert } = require('chai');
let { isOddOrEven } = require('./app');

describe('Tests isOddOrEven functionality', () => {
	it('function returns undefined', () => {
		assert.equal(isOddOrEven([]), undefined);
	});

	it('function returns even', () => {
		assert.equal(isOddOrEven('Obicha'), 'even');
	});

	it('function returns even', () => {
		assert.equal(isOddOrEven('Obicham'), 'odd');
	});
});
