function equalNeighbors(matrix = []) {
	let counter = 0;

	for (let i = 0; i < matrix.length - 1; i++) {
		for (let j = 1; j < matrix[i].length; j++) {
			if (matrix[i][j] == matrix[i + 1][j]) {
				counter++;
			}

			if (matrix[i][j] == matrix[i][j - 1]) {
				counter++;
			}
		}
	}

	for (let i = 0; i < matrix[matrix.length - 1].length; i++) {
		if (matrix[matrix.length - 1][i] == matrix[matrix.length - 1][i + 1]) {
			counter++;
		}
	}

	for (let i = 0; i < matrix.length - 1; i++) {
		if (matrix[i][0] == matrix[i + 1][0]) {
			counter++;
		}
	}

	console.log(counter);
}

equalNeighbors([
	['2', '3', '4', '7', '0'],
	['4', '0', '5', '3', '4'],
	['2', '3', '5', '4', '2'],
	['9', '8', '7', '5', '4'],
]);
