function deleteByEmail() {
	let emailToSearchFor = document.querySelector('label input').value;

	let tableCells = document.querySelectorAll('#customers td:nth-child(2)');

	let found = false;
	for (let cell of tableCells) {
		if (cell.textContent === emailToSearchFor) {
			cell.parentElement.remove();
			found = true;
		}
	}

	let result = document.getElementById('result');

	result.textContent = found ? 'Deleted.' : 'Not found.';
}
