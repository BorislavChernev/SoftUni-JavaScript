function diagonalSum(matrix = []) {
	let leftSum = 0;
	let RightSum = 0;

	let j = 0;
	for (let i = 0; i < matrix.length; i++) {
		const element = matrix[i][j];
		leftSum += parseInt(element);
		j++;
	}

	j = matrix.length - 1;
	for (let i = 0; i < matrix.length; i++) {
		const element = matrix[i][j];
		RightSum += parseInt(element);
		j--;
	}

	console.log(leftSum + ' ' + RightSum);
}

diagonalSum([
	[20, 40],
	[10, 60],
]);
