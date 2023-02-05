function jansNotation(array = []) {
	let output = [];
	let number = [];
	let operators = [];

	let operationEnum = {
		'+': (a, b) => a + b,
		'-': (a, b) => a - b,
		'*': (a, b) => a * b,
		'/': (a, b) => a / b,
	};

	for (let el of array) {
		if (typeof el === 'number') {
			number.push(el);
		} else {
			operators.push(el);
		}
	}

	if (operators.length < number.length - 1) {
		console.log('Error: too many operands!');
		return;
	} else if (number.length === operators.length || number.length === 0) {
		console.log('Error: not enough operands!');
		return;
	}

	for (let el of array) {
		if (typeof el === 'number') {
			output.push(el);
			continue;
		}
		let numA = output.pop();
		let numB = output.pop();
		let result = operationEnum[el](numB, numA);
		output.push(result);
	}

	console.log(output.join());
}

jansNotation([3, 4, '+']);
