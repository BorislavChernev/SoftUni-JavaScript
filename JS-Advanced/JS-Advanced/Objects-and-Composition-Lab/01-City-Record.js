function cityRecord(name, population, treasury) {
	let obj = {};

	obj.name = name;
	obj.population = population;
	obj.treasury = treasury;

	return obj;
}

let city = cityRecord('Tortuga', 7000, 15000);