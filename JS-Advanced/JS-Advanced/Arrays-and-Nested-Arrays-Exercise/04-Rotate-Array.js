function rotateArray(array = [], number) {
	number = number % array.length;

	for (let i = 0; i < number; i++) {
		let element = array.pop();
		array.unshift(element);
	}

	console.log(array.join(' '));
}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);
