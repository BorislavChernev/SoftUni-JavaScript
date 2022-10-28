function toggle() {
	let button = document.getElementsByClassName('button')[0];
	let textDiv = document.getElementById('extra');

	if (button.innerText === 'MORE') {
		button.innerText = 'Less';
		textDiv.style.display = 'block';
	} else if (button.innerText === 'LESS') {
		button.innerText = 'More';
		textDiv.style.display = 'none';
	}
}
