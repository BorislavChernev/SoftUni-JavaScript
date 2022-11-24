function sumTable() {
	let tableRows = document.querySelectorAll('table tr');

	let sum = 0;
	for (let i = 1; i < tableRows.length - 1; i ++) {
		const element = tableRows[i].children;

		sum += Number(element[1].innerText);
	}

	document.getElementById('sum').innerText = sum;
}
