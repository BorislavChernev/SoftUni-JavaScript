function fruit(...params) {
	let product = params[0];
	let weight = params[1];
	let price = params[2];

	let finalPrice = (weight / 1000) * price;

	console.log(
		`I need $${finalPrice.toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${product}.`
	);
}
