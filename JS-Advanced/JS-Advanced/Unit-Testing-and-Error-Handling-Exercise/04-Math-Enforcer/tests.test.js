let { assert } = require('chai');
let { mathEnforcer } = require('./app');

describe('Tests mathEnforcer functionality', () => {
	describe('addFive', () => {
		it('function returns undefined', () => {
			let result = mathEnforcer.addFive('ads');
			assert.equal(result, undefined);
		});

		it('function returns number + 5', () => {
			let result = mathEnforcer.addFive(5);
			assert.equal(result, 10);
		});
	});

	describe('subtractTen', () => {
		it('function returns undefined', () => {
			let result = mathEnforcer.subtractTen('sdf');
			assert.equal(result, undefined);
		});

		it('function returns number - 10', () => {
			let result = mathEnforcer.subtractTen(15);
			assert.equal(result, 5);
		});
	});

	describe('sum', () => {
		it('function returns undefined', () => {
			let result = mathEnforcer.sum('asd', 'qwe');
			assert.equal(result, undefined);
		});

		it('function returns undefined', () => {
			let result = mathEnforcer.sum('asd', 1);
			assert.equal(result, undefined);
		});

		it('function returns undefined', () => {
			let result = mathEnforcer.sum(5, 'asd');
			assert.equal(result, undefined);
		});

		it('function returns sum of two numbers', () => {
			let result = mathEnforcer.sum(5, 1);
			assert.equal(result, 6);
		});
	});
});
