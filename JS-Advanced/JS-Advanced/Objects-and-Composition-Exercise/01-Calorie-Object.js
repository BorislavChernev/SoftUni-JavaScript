function calorieObject(array = []) {
	let products = {};

	for (let i = 0; i < array.length; i += 2) {
		products[array[i]] = Number(array[i + 1]);
	}
	console.log(products);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
