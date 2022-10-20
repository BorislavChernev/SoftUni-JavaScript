function addAndRemoveElements(text) {
	let array = [];

	for (let i = 0; i < text.length; i++) {
		let tempArr = text[i].split(' ');
		command = tempArr[0];
		value = tempArr[1];

		if (command == 'add') {
			array.push(value);
		}
		if (command == 'remove') {
			array.splice(value, 1);
		}
	}

	for (let j = 0; j < array.length; j++) {
		console.log(array[j]);
	}
}
console.log(addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']));
