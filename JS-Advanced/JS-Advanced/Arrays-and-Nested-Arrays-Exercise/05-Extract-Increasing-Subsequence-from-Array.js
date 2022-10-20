function extractSubset(array = []) {
    for (let i = 0; i < array.length; i++) {
		const element = array[i];

		if (i > 0 && array[i] < array[i - 1]) {
			array.splice(i, 1);
            i--;
		}
	}

	return array;
}

extractSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
