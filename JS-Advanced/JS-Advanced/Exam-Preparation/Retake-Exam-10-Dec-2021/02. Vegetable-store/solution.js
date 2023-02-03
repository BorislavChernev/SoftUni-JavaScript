class VegetableStore {
	constructor(owner = '', location = '', availableProducts = []) {
		this.owner = owner;
		this.location = location;
		this.availableProducts = availableProducts;
	}

	loadingVegetables(vegetables) {
		let buff = `Successfully added`;
		let added = [];
		for (let i = 0; i < vegetables.length; i++) {
			const element = vegetables[i].split(' ');

			let type = element[0];
			let quantity = element[1];
			let price = element[2];

			let currVeg = this.availableProducts.find((x) => x.type === type);
			if (currVeg) {
				if (price > currVeg.price) {
					currVeg.price = price;
					currVeg.quantity = Number(currVeg.quantity) + Number(quantity);
				}
			} else {
				this.availableProducts.push({
					type,
					quantity: Number(quantity),
					price: Number(price),
				});
			}

			if (!added.find((x) => x === type)) {
				buff += ` ${type}`;
				buff += `,`;
			}
			added.push(type);
		}
		return buff.substring(0, buff.length - 1);
	}

	buyingVegetables(selectedProducts) {
		let purchases = 0;
		let totalPrice = 0;
		for (let i = 0; i < selectedProducts.length; i++) {
			const element = selectedProducts[i].split(' ');
			let type = element[0];
			let quantity = Number(element[1]);

			let currVeg = this.availableProducts.find((x) => x.type === type);
			if (!currVeg || Number(currVeg.quantity) == 0) {
				throw new Error(
					`The quantity ${Number(
						quantity
					)} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(
						2
					)}.`
				);
			} else {
				totalPrice += Number(currVeg.price) * Number(quantity);
				this.availableProducts.find((x) => x === currVeg).quantity -=
					Number(quantity);
				purchases++;
			}
		}
		return `Great choice! You must pay the following amount $${totalPrice.toFixed(
			2
		)}.`;
	}

	rottingVegetable(type, quantity) {
		let currVeg = this.availableProducts.find((X) => X.type === type);

		if (!currVeg) {
			throw new Error(`${type} is not available in the store.`);
		}
		if (quantity > currVeg.quantity) {
			this.availableProducts.find((x) => x === currVeg).quantity = 0;
			return `The entire quantity of the ${type} has been removed.`;
		} else {
			this.availableProducts.find((x) => x === currVeg).quantity -= quantity;
			return `Some quantity of the ${type} has been removed.`;
		}
	}

	revision() {
		let buff = 'Available vegetables:\n';

		let sortedVegs = this.availableProducts.sort((a, b) => a.price - b.price);
		for (let veg of sortedVegs) {
			let currValue = Number(veg.price);
			buff += `${veg.type}-${veg.quantity}-$${currValue}\n`;
		}

		buff += `The owner of the store is ${this.owner}, and the location is ${this.location}.`;
		return buff;
	}
}

let vegStore = new VegetableStore('Jerrie Munro', '1463 Pette Kyosheta, Sofia');
console.log(
	vegStore.loadingVegetables([
		'Okra 2.5 3.5',
		'Beans 10 2.8',
		'Celery 5.5 2.2',
		'Celery 0.5 2.5',
	])
);
console.log(vegStore.rottingVegetable('Okra', 1));
console.log(vegStore.rottingVegetable('Okra', 2.5));
console.log(vegStore.buyingVegetables(['Beans 8', 'Celery 1.5']));
console.log(vegStore.revision());
