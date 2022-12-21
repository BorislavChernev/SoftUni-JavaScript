const { chooseYourCar } = require('./chooseYourCar');
let { assert } = require('chai');

describe('Tests', function () {
	describe('ChoosingType', function () {
		it('year < 1900 || year > 2022', function () {
			assert.throw(function () {
				chooseYourCar.choosingType('Sedan', 'red', 1899),
					Error,
					'Invalid Year!';
			});

			assert.throw(function () {
				chooseYourCar.choosingType('Sedan', 'red', 2023),
					Error,
					'Invalid Year!';
			});
		});

		it('type !== Sedan', function () {
			assert.throw(function () {
				chooseYourCar.choosingType('kostenurka', 'red', 2000),
					Error,
					'This type of car is not what you are looking for.';
			});
		});

		it('year >= 2010 meats the requirements', function () {
			assert.equal(
				chooseYourCar.choosingType('Sedan', 'red', 2010),
				`This red Sedan meets the requirements, that you have.`
			);
		});

		it('year < 2010 is too old', function () {
			assert.equal(
				chooseYourCar.choosingType('Sedan', 'red', 2009),
				`This Sedan is too old for you, especially with that red color.`
			);
		});
	});

	describe('brandName', function () {
		it('stores the car brand', function () {
			assert.equal(
				chooseYourCar.brandName(['BMW', 'Audi', 'Mercedes'], 1),
				['BMW', 'Mercedes'].join(', ')
			);
		});

		it('invalid input throws an error', function () {
			assert.throw(function () {
				chooseYourCar.brandName(1, 1), Error, 'Invalid Information!';
			});

			assert.throw(function () {
				chooseYourCar.brandName(['BMW', 'Audi', 'Mercedes'], 'bmw'),
					Error,
					'Invalid Information!';
			});
		});
	});

	describe('CarFuelConsumption', function () {
		it('invalid Info throws', function () {
			assert.throw(function () {
				chooseYourCar.carFuelConsumption('asd', 7),
					Error,
					'Invalid Information!';
			});

			assert.throw(function () {
				chooseYourCar.carFuelConsumption(100, 'asd'),
					Error,
					'Invalid Information!';
			});
		});
		it('liters/100km <= 7L returns efficient', function () {
			assert.equal(
				chooseYourCar.carFuelConsumption(100, 7),
				'The car is efficient enough, it burns 7.00 liters/100 km.'
			);

			assert.equal(
				chooseYourCar.carFuelConsumption(100, 6),
				'The car is efficient enough, it burns 6.00 liters/100 km.'
			);
		});
		it('burns too much', function () {
			assert.equal(
				chooseYourCar.carFuelConsumption(100, 10),
				'The car burns too much fuel - 10.00 liters!'
			);
		});
	});
});
