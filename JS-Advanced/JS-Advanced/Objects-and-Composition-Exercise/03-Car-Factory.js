function carFactory(input) {
	let car = {};

	car.model = input.model;

	if (input.power <= 90) {
		car.engine = {
			power: 90,
			volume: 1800,
		};
	} else if (input.power <= 120) {
		car.engine = {
			power: 120,
			volume: 2400,
		};
	} else {
		car.engine = {
			power: 200,
			volume: 3500,
		};
	}

	if (input.carriage === 'hatchback') {
		car.carriage = {
			type: 'hatchback',
			color: input.color,
		};
	} else {
		car.carriage = {
			type: 'coupe',
			color: input.color,
		};
	}

	let size;
	if (input.wheelsize % 2 !== 0) {
		size = input.wheelsize;
	} else {
		size = input.wheelsize - 1;
	}

	car.wheels = [size, size, size, size];

	return car;
}

carFactory({
	model: 'VW Golf II',
	power: 90,
	color: 'blue',
	carriage: 'hatchback',
	wheelsize: 14,
});

carFactory({
	model: 'Opel Vectra',
	power: 110,
	color: 'grey',
	carriage: 'coupe',
	wheelsize: 17,
});
