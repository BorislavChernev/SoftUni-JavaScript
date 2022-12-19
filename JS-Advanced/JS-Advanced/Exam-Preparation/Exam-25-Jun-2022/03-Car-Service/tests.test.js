const { carService } = require('./03. Car Service_Resources');
const { assert } = require('chai');

describe('Tests', function () {
	describe('isItExpensive', function () {
		it('if issue === Engine or Transmission => more money', function () {
			assert.equal(
				carService.isItExpensive('Engine'),
				`The issue with the car is more severe and it will cost more money`
			);

			assert.equal(
				carService.isItExpensive('Transmission'),
				`The issue with the car is more severe and it will cost more money`
			);
		});

		it('else', function () {
			assert.equal(
				carService.isItExpensive('something else'),
				`The overall price will be a bit cheaper`
			);
		});
	});

	describe('numberOfParts', function () {
		it('numberOfParts > 2 && < 7 => discount === 15%', function () {
			assert.equal(
				carService.discount(5, 100),
				`Discount applied! You saved 15$`
			);
		});

		it('numberOfParts > 7 => discount === 30%', function () {
			assert.equal(
				carService.discount(8, 200),
				`Discount applied! You saved 60$`
			);
		});

		it('numberOfParts < 2 => discount === false', function () {
			assert.equal(carService.discount(1, 200), `You cannot apply a discount`);
		});

		it('numberOfParts NaN || totalPrice NaN => throws an error', function () {
			assert.throw(function () {
				carService.discount('asd', 200), Error, 'Invalid input';
			});

			assert.throw(function () {
				carService.discount(5, 'qwfr'), Error, 'Invalid input';
			});
		});
	});

	describe('partsToBuy', function () {
		it('partsCatalog === 0 => return 0', function () {
			assert.equal(carService.partsToBuy([], []), 0);
		});

		it('proper return', function () {
			assert.equal(
				carService.partsToBuy(
					[
						{ part: 'blowoff valve', price: 145 },
						{ part: 'coil springs', price: 230 },
					],
					['blowoff valve']
				),
				145
			);
		});

		it('throws an error if invalid input', function () {
			assert.throw(function () {
				carService.partsToBuy('asd', ['blowoff valve']);
			});

			assert.throw(function () {
				carService.partsToBuy(
					[
						{ part: 'blowoff valve', price: 145 },
						{ part: 'coil springs', price: 230 },
					],
					'asd'
				);
			});
		});
	});
});
