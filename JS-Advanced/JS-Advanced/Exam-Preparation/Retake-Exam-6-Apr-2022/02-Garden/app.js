class Garden {
	constructor(spaceAvailable = 0, plants = [], storage = []) {
		this.spaceAvailable = spaceAvailable;
		this.plants = plants;
		this.storage = storage;
	}

	addPlant(plantName, spaceRequired) {
		if (this.spaceAvailable < spaceRequired) {
			throw new Error('Not enough space in the garden.');
		}

		this.plants.push({
			plantName,
			spaceRequired,
			ripe: false,
			quantity: 0,
		});

		this.spaceAvailable -= spaceRequired;
		return `The ${plantName} has been successfully planted in the garden.`;
	}

	ripenPlant(plantName, quantity) {
		let currPlant = this.plants.find((x) => x.plantName == plantName);

		if (currPlant === undefined) {
			throw new Error(`There is no ${plantName} in the garden.`);
		}
		if (currPlant.ripe === true) {
			throw new Error(`The ${plantName} is already ripe.`);
		}
		if (quantity <= 0) {
			throw new Error(`The quantity cannot be zero or negative.`);
		}

		currPlant.ripe = true;
		currPlant.quantity += quantity;

		if (currPlant.quantity === 1) {
			return `${quantity} ${plantName} has successfully ripened.`;
		} else if (quantity > 1) {
			return `${quantity} ${plantName}s have successfully ripened.`;
		}
	}

	harvestPlant(plantName) {
		let currPlant = this.plants.find((x) => x.plantName == plantName);

		if (currPlant === undefined) {
			throw new Error(`There is no ${plantName} in the garden."`);
		}

		if (currPlant.ripe === false) {
			throw new Error(
				`The ${plantName} cannot be harvested before it is ripe.`
			);
		}

		this.storage.push(this.plants.splice(this.plants.indexOf(currPlant), 1));
		this.spaceAvailable += currPlant.spaceRequired;
		return `The ${plantName} has been successfully harvested.`;
	}

	generateReport() {
		let output = '';

		output += `The garden has ${this.spaceAvailable} free space left.\n`;
		output += `Plants in the garden: `;
		let sortedPlants = this.plants
			.sort((a, b) => a.plantName.localeCompare(b.plantName))
			.forEach((plant) => (output += `${plant.plantName}, `));
		output = output.substring(0, output.length - 2);
		let ifString = '';
		if (this.storage.length === 0) {
			ifString = `Plants in storage: The storage is empty.`;
		} else {
			ifString = `Plants in storage: `;
			for (let i = 0; i < this.storage.length; i++) {
				ifString += `${this.storage[i][0].plantName} (${this.storage[i][0].quantity})`;
				if (i < this.storage.length - 1) {
					ifString += `, `;
				}
			}
		}
		output += '\n' + ifString;
		return output;
	}
}
const myGarden = new Garden(250);

myGarden.addPlant('apple', 20);
myGarden.addPlant('orange', 200);
myGarden.addPlant('raspberry', 10);
myGarden.ripenPlant('apple', 10);
myGarden.ripenPlant('orange', 1);
myGarden.harvestPlant('orange');
myGarden.harvestPlant('apple');
myGarden.generateReport();
