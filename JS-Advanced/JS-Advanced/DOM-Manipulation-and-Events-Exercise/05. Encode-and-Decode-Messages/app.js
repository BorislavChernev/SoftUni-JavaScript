function encodeAndDecodeMessages() {
	let buttons = document.querySelectorAll('button');

	buttons[0].addEventListener('click', encode);
	buttons[1].addEventListener('click', decode);

	function encode(e) {
		let msg = '';
		let currText = e.target.parentElement.children[1].value;

		for (let i = 0; i < currText.length; i++) {
			let currChar = currText[i].charCodeAt();
			msg += String.fromCharCode(currChar + 1);
		}
		let textAreas = document.querySelectorAll('textarea');
		let decodeArea = textAreas[1];
		decodeArea.value = msg;
		let currTextArea = textAreas[0];
		currTextArea.value = '';
	}

	function decode(e) {
		let currArea = e.target.parentElement.children[1];
		let currentText = currArea.value;
		let msg = '';

		for (let i = 0; i < currentText.length; i++) {
			let currChar = currentText[i].charCodeAt();
			msg += String.fromCharCode(currChar - 1);
		}
		currArea.value = msg;
	}
}
