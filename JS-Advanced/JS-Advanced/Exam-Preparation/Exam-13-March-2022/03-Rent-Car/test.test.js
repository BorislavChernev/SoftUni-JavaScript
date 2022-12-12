const { rentCar } = require('./rentCar');
const { assert } = require('chai');

describe('Tests', function () {
	describe('searchCar', function () {
		it('proper', function () {
			assert.equal(
				rentCar.searchCar(['Volkswagen', 'BMW', 'Audi'], 'Audi'),
				`There is 1 car of model Audi in the catalog!`
			);
		});

		it('invalid input', function () {
			assert.throw(
				function () {
					rentCar.searchCar('asd', 'Audi');
				},
				Error,
				'Invalid input!'
			);
		});

		it('No elements', function () {
			assert.throw(
				function () {
					rentCar.searchCar([], 'Audi');
				},
				Error,
				'There are no such models in the catalog!'
			);
		});
	});

	describe('calculatePriceOfCar', function () {
		it('invalid input throw an error', function () {
			assert.throw(
				function () {
					rentCar.calculatePriceOfCar(1, 1);
				},
				Error,
				'Invalid input!'
			);

			assert.throw(
				function () {
					rentCar.calculatePriceOfCar('asd', 'sd');
				},
				Error,
				'Invalid input!'
			);
		});

		it('proper', function () {
			assert.equal(
				rentCar.calculatePriceOfCar('Audi', 5),
				`You choose Audi and it will cost $180!`
			);
		});

		it('not found throws an error', function () {
			assert.throw(function () {
				rentCar.calculatePriceOfCar('1', 5),
					Error,
					'No such model in the catalog!';
			});
		});
	});

	describe('checkBudget', function () {
		it('invalid input throws an error', function () {
			assert.throw(function () {
				rentCar.checkBudget('asd', 5, 120), Error, 'Invalid input!';
			});

			assert.throw(function () {
				rentCar.checkBudget(3, 'asd', 120), Error, 'Invalid input!';
			});

			assert.throw(function () {
				rentCar.checkBudget(3, 5, 'asd'), Error, 'Invalid input!';
			});
		});

		it('budget == cost', function () {
			assert.equal(rentCar.checkBudget(10, 1, 10), 'You rent a car!');
		});

		it('budget > cost', function () {
			assert.equal(rentCar.checkBudget(10, 1, 20), 'You rent a car!');
		});

		it('budget < cost', function () {
			assert.equal(rentCar.checkBudget(10, 3, 1), 'You need a bigger budget!');
		});
	});
});
