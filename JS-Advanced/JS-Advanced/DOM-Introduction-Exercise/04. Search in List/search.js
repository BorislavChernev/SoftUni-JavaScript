function search() {
	let list = document.getElementById('towns').children;
	let text = document.getElementById('searchText').value;
	let result = document.getElementById('result');

	let count = 0;
	for (let i = 0; i < list.length; i++) {
		let li = list[i];
		let name = li.innerText;
		if (text.length > 0) {
			if (name.indexOf(text) >= 0) {
				li.innerHTML = `<bold><u>${name}</u></bold>`;
				count++;
			}
		}
	}

	result.innerText = `${count} matches found`;
}
