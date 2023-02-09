let { assert } = require('chai');
let { lookupChar } = require('./app');

describe('Tests lookupChar functionality', () => {
	it('function returns undefined', () => {
		assert.equal(lookupChar([], 1), undefined);
	});

	it('function returns undefined', () => {
		assert.equal(lookupChar('something', 'asd'), undefined);
	});

	it('function returns incorrect index', () => {
		assert.equal(lookupChar('something', -1), 'Incorrect index');
	});

	it('function returns incorrect index', () => {
		assert.equal(lookupChar('something', 10), 'Incorrect index');
	});

	it('function returns index', () => {
		assert.equal(lookupChar('something', 5), 'h');
	});
});
