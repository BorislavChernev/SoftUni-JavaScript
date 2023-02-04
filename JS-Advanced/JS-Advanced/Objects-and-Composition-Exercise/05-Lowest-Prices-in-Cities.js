function lowestPricesInCities(array = []) {
	let products = [];
	for (let i = 0; i < array.length; i++) {
		let strings = array[i].split(' | ');
		let [townName, productName, productPrice] = [...strings];

		let currProduct = products.find((p) => p[1] == productName);
		if (currProduct === undefined) {
			products.push([townName, productName, productPrice]);
		} else {
			let currentProduct = products.find(
				(p) => p[1] == productName && Number(p[2]) > Number(productPrice)
			);

			if (currentProduct !== undefined) {
				currentProduct[0] = townName;
				currentProduct[2] = Number(productPrice);
			}
		}
	}

	for (let i = 0; i < products.length; i++) {
		console.log(`${products[i][1]} -> ${products[i][2]} (${products[i][0]})`);
	}
}

lowestPricesInCities([
	'Sofia City | Audi | 100000',
	'Sofia City | BMW | 100000',
	'Sofia City | Mitsubishi | 10000',
	'Sofia City | Mercedes | 10000',
	'Sofia City | NoOffenseToCarLovers | 0',
	'Mexico City | Audi | 1000',
	'Mexico City | BMW | 99999',
	'Mexico City | Mitsubishi | 10000',
	'New York City | Mitsubishi | 1000',
	'Washington City | Mercedes | 1000',
]);
