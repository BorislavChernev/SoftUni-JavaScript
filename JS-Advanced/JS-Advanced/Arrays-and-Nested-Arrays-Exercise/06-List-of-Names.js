function listOfNames(array = []) {
	array.sort();
	array.unshift(0);

	for (let i = 1; i < array.length; i++) {
		const element = array[i];

		console.log(`${i}.${element}`);
	}
}

listOfNames(['John', 'Bob', 'Christina', 'Ema']);
