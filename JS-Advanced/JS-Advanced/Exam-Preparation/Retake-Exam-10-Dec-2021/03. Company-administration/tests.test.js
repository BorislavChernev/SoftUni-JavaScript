const { companyAdministration } = require('./companyAdministration');
const { assert } = require('chai');

describe('Test', function () {
	describe('hiringEmployee', function () {
		it('position != programmer throws', function () {
			assert.throw(() => {
				companyAdministration.hiringEmployee('Gosho', 'pr', 3);
			}, Error);
		});

		it('position != programmer returns successfully hired', function () {
			assert.equal(
				companyAdministration.hiringEmployee('Gosho', 'Programmer', '3'),
				`Gosho was successfully hired for the position Programmer.`
			);
		});

		it('position != programmer returns not approved', function () {
			assert.equal(
				companyAdministration.hiringEmployee('Gosho', 'Programmer', '2'),
				`Gosho is not approved for this position.`
			);
		});
	});

	describe('calculateSalary', function () {
		it('hours != Number throws', function () {
			assert.throw(() => {
				companyAdministration.calculateSalary('asd');
			}, Error);
		});

		it('hours != Number > 0', function () {
			assert.throw(() => {
				companyAdministration.calculateSalary(-23);
			}, Error);
		});

		it('returns equal salary', function () {
			assert.equal(companyAdministration.calculateSalary(10), 150);
		});

		it('returns equal salary', function () {
			assert.equal(companyAdministration.calculateSalary(161), 3415);
		});
	});

	describe('firedEmployee', function () {
		it('hours != Number throws', function () {
			assert.throw(() => {
				companyAdministration.firedEmployee(1, 1);
			}, Error);
		});

		it('hours != Number throws', function () {
			assert.throw(() => {
				companyAdministration.firedEmployee(['Gosho', 'Ilcho', 'Boro'], 'asd');
			}, Error);
		});

		it('hours != Number throws', function () {
			assert.throw(() => {
				companyAdministration.firedEmployee(['Gosho', 'Ilcho', 'Boro'], 3);
			}, Error);
		});

		it('fires properly', function () {
			assert.equal(
				companyAdministration.firedEmployee(['Gosho', 'Ilcho', 'Boro'], 0),
				['Ilcho', 'Boro'].join(', ')
			);
		});
	});
});
