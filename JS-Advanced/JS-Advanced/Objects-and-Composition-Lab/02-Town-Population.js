function townPopulation(array = []) {
	let towns = [];

	for (let i = 0; i < array.length; i++) {
		let funcArgs = array[i].split(' <-> ');

		let [townName, townPopulation] = funcArgs;

		townPopulation = parseInt(townPopulation);

		if (towns.some((town) => town.townName == townName)) {
			let currTown = towns.find((town) => town.townName == townName);

			currTown.townPopulation += townPopulation;
		} else towns.push({ townName, townPopulation });
	}

	for (let i = 0; i < towns.length; i++) {
		const element = towns[i];
		console.log(`${element.townName} : ${element.townPopulation}`);
	}
}

townPopulation([
	'Sofia <-> 1200000',
	'Montana <-> 20000',
	'New York <-> 10000000',
	'Washington <-> 2345000',
	'Las Vegas <-> 1000000',
	'Las Vegas <-> 1000000',
]);
