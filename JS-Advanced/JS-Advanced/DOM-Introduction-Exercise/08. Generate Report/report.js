function generateReport() {
	let input = Array.from(document.getElementsByTagName('input'));

	const arrayToReturn = [];
	let rows = Array.from(document.getElementsByTagName('tr'));
	const cols = [];

	for (let i = 0; i < rows.length; i++) {
		const row = rows[i];
		const object = {};

        let a = 0;
        a++;
        console.log(a);

		for (let y = 0; y < row.children.length; y++) {
			const element = row.children[y];
			if (i == 0) {
				if (element.children[0].checked) {
					cols.push(y);
				}
				continue;
			}

			if (cols.includes(y)) {
				let propName = input[y].name;
				object[propName] = element.textContent;
			}
		}
		if (i !== 0) {
			arrayToReturn.push(object);
		}
	}

	document.getElementById('output').value = JSON.stringify(arrayToReturn);
}
