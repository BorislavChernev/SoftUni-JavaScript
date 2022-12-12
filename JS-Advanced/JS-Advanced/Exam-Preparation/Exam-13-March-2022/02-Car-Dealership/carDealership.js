class CarDealership {
	constructor(name = '') {
		this.name = name;
		(this.availableCars = []), (this.soldCars = []), (this.totalIncome = 0);
	}

	addCar(model, horsepower, price, mileage) {
		if (!model || horsepower < 0 || (price < 0) | (mileage < 0)) {
			throw new Error('Invalid input!');
		}

		this.availableCars.push({
			model,
			horsepower: Number(horsepower),
			price: Number(price),
			mileage: Number(mileage),
		});

		return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(
			2
		)} km - ${price.toFixed(2)}$`;
	}

	sellCar(model, desiredMileage) {
		let currCar = this.availableCars.find((x) => x.model === model);
		if (!currCar) {
			throw new Error(`${model} was not found!`);
		}

		let diff = currCar.mileage - desiredMileage;
		if (diff <= 0) {
		} else if (diff <= 40000) {
			currCar.price = currCar.price - currCar.price * 0.05;
		} else if (diff > 40000) {
			currCar.price = currCar.price - currCar.price * 0.1;
		}

		this.soldCars.push({
			model: currCar.model,
			horsepower: currCar.horsepower,
			soldPrice: currCar.price,
		});
		let currPrice = currCar.price;
		let currModel = currCar.model;
		this.totalIncome += currPrice;
		this.availableCars.splice(this.availableCars.indexOf(currCar), 1);

		return `${currCar.model} was sold for ${currPrice.toFixed(2)}$`;
	}

	currentCar() {
		if (!this.availableCars) {
			return 'There are no available cars';
		}

		let buff = '-Available cars:\n';

		for (let i = 0; i < this.availableCars.length; i++) {
			const car = this.availableCars[i];
			buff += `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(
				2
			)} km - ${car.price.toFixed(2)}$`;
			if (i < this.availableCars.length - 1) {
				buff += '\n';
			}
		}
		return buff;
	}

	salesReport(criteria) {
		let sorted;
		if (criteria === 'horsepower') {
			sorted = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
		} else {
			sorted = this.soldCars.sort((a, b) => b.model.localeCompare(a.model));
		}

		let buff = `-${this.name} has a total income of ${this.totalIncome.toFixed(
			2
		)}$\n`;
		buff += `-${this.soldCars.length} cars sold:\n`;

		for (let i = 0; i < sorted.length; i++) {
			const car = sorted[i];
			buff += `---${car.model} - ${Number(car.horsepower)} HP - ${Number(
				car.soldPrice
			).toFixed(2)}$`;
			if (i < sorted.length - 1) {
				buff += '\n';
			}
		}
		return buff;
	}
}
let dealership = new CarDealership('SoftAuto');

console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
console.log(dealership.addCar('Audi A3', 120, 4900, 240000));
console.log(dealership.sellCar('Toyota Corolla', 230000));
console.log(dealership.sellCar('Mercedes C63', 110000));
console.log(dealership.salesReport('horsepower'));
