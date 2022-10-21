function negativePositiveNumbers(arr = []) {
	let outputArr = [];

	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		if (arr[i] < 0) {
			outputArr.unshift(element);
		} else outputArr.push(element);
	}

	console.log(outputArr.join('\n'));
}

negativePositiveNumbers([7, -2, 8, 9]);
