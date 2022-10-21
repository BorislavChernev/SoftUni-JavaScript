function evenPositionElement(array = []) {
	let evenArr = [];

	for (let i = 0; i < array.length; i += 2) {
		const element = array[i];
		evenArr.push(element);
	}

	console.log(evenArr.join(' '));
}

evenPositionElement(['20', '30', '40', '50', '60']);
