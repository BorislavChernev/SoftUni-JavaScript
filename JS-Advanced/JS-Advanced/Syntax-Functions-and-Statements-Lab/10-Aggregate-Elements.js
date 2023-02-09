let aggregateElements = (array) => {
	let numbersArray = array.map(Number);
	let first = numbersArray.reduce((a, b) => a + b);
    console.log(first);

	let second = 0;

	for (let i = 0; i < numbersArray.length; i++) {
		second += 1 / numbersArray[i];
	}
	console.log(second);

	let third = numbersArray.join('');
	console.log(third);

};