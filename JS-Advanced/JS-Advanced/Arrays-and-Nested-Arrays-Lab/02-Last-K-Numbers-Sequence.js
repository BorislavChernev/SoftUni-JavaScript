function lastKNumbersSequence(n, k) {
	let array = [1];

	for (let i = 1; i < n; i++) {
		let number = 0;

		for (let j = 1; j <= k; j++) {
			if (i - j >= 0) {
				number += array[i - j];
			}
		}
		array.push(number);
	}

	return array
}

lastKNumbersSequence(8, 2);
