function processOddPositions(arr = []) {
	return arr
		.filter((n, i) => i % 2 !== 0)
		.map((n) => n * 2)
		.reverse()
		.join(' ');
}

console.log(processOddPositions([10, 15, 20, 25]));
