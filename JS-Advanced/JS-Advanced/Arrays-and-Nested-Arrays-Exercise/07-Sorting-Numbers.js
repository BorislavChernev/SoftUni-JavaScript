function sortingNumber(arr = []) {
	let result = [];
	array = arr.sort((a, b) => a - b);
	while (array.length !== 0) {
		result.push(array[0]) && array.shift();
		result.push(array[array.length - 1]) && array.pop();
	}
	return result;
}

console.log(sortingNumber([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
