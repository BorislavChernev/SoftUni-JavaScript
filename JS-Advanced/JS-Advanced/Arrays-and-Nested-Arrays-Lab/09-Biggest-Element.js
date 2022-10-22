function biggestNumber(arr = []) {
	let n = Number.MIN_SAFE_INTEGER;

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			const element = arr[i][j];
			if (element > n) {
				n = element;
			}
		}
	}

	return n;
}

console.log(
	biggestNumber([
		[20, 50, 10],
		[8, 33, 145],
	])
);
