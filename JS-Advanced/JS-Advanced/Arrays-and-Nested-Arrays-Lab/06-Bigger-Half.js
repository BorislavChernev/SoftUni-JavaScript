function smallestTwoNumbers(array = []) {
	array.sort((a, b) => b - a);
	let result = array.slice(0, ((array.length / 2) + array.length % 2)).reverse();
	return result;
}

smallestTwoNumbers([3, 19, 14, 7, 2, 19, 6]);
