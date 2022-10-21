function magicMatrices(array = []) {
	let lastSum = array[0][0] + array[0][1] + array[0][2];
	for (let i = 0; i < 3; i++) {
		let currentSum = array[i][0] + array[i][1] + array[i][2];
		if (currentSum != lastSum) {
			return false;
		}
	}

	lastSum = array[0][0] + array[1][0] + array[2][0];
	for (let i = 0; i < 3; i++) {
		let currentSum = array[0][i] + array[1][i] + array[2][i];
		if (currentSum != lastSum) {
			return false;
		}
	}

	return true;
}

console.log(
	magicMatrices([
		[1, 0, 0],
		[0, 0, 1],
		[0, 1, 0],
	])
);
