function sum(array, startI = 0, endI = array.length) {
	try {
		if (!Array.isArray(array)) {
			throw new Error('NaN');
		}

		if (startI < 0) {
			startI = 0;
		}

		if (endI >= array.length - 1) {
			endI = array.length - 1;
		}

		let result = 0;

		for (let i = startI; i <= endI; i++) {
			let element = array[i];
			result += Number(element);
		}

		return result;
	} catch (e) {
		throw new Error('NaN');
	}
}

let sumOfArr = sum('text', 0, 2);

console.log(sumOfArr);
