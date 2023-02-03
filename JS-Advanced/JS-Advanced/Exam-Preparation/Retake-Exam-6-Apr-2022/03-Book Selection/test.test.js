let {
	isGenreSuitable,
	isItAffordable,
	suitableTitles,
} = require(`./bookSelection`);
let { assert, expect } = require('chai');
const bookSelection = require('./bookSelection');

describe('Tests', function () {
	describe('isGenreSuitable', function () {
		it('Thriller and age <= 12', function () {
			assert.equal(
				isGenreSuitable('Thriller', 12),
				`Books with Thriller genre are not suitable for kids at 12 age`
			);
		});
		it('Horror and age <= 12', function () {
			assert.equal(
				isGenreSuitable('Horror', 11),
				`Books with Horror genre are not suitable for kids at 11 age`
			);
		});
		it('Horror and age > 12', function () {
			assert.equal(isGenreSuitable('Horror', 13), `Those books are suitable`);
		});
	});

	describe('isItAffordable', function () {
		it('budget > price', function () {
			assert.equal(isItAffordable(12, 30), `Book bought. You have 18$ left`);
		});
		it('budget === price', function () {
			assert.equal(isItAffordable(12, 12), `Book bought. You have 0$ left`);
		});
		it('budget < price', function () {
			assert.equal(isItAffordable(12, 10), `You don't have enough money`);
		});
		it('price NaN', function () {
			assert.throws(
				function () {
					isItAffordable('18', 30);
				},
				Error,
				'Invalid input'
			);
		});
		it('budget NaN', function () {
			assert.throws(
				function () {
					isItAffordable(18, '30');
				},
				Error,
				'Invalid input'
			);
		});
	});

	describe('suitableTitles', function () {
		it('books stores the titles and genres of books', function () {
			let books = [
				{
					title: 'The Art of War1',
					genre: 'Novel',
				},
				{
					title: 'The Art of War2',
					genre: 'Novel',
				},
				{
					title: 'The Art of War3',
					genre: 'Thriller',
				},
			];

			let result = ['The Art of War1', 'The Art of War2'];
			assert.equal(suitableTitles(books, 'Novel').join(' '), result.join(' '));
		});

		it('invalid parameters passed equal to invalid input', function () {
			let books = [
				{
					title: 'The Art of War1',
					genre: 'Novel',
				},
				{
					title: 'The Art of War2',
					genre: 'Novel',
				},
				{
					title: 'The Art of War3',
					genre: 'Thriller',
				},
			];

			let a = 100;
			assert.throws(
				function () {
					suitableTitles(a, 'Roman');
				},
				Error,
				'Invalid input'
			);

			assert.throws(
				function () {
					suitableTitles(books, a);
				},
				Error,
				'Invalid input'
			);
		});
	});
});
