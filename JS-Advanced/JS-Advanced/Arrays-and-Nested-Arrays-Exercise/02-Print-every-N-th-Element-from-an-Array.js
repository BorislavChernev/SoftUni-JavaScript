function printNthElement(array = [], Nth) {
	let newArr = [];
	for (let i = 0; i < array.length; i++) {
		if (i % Nth == 0) {
			newArr.push(array[i]);
		}
	}

	return newArr;
}

console.log(printNthElement(['5', '20', '31', '4', '20'], 2));
