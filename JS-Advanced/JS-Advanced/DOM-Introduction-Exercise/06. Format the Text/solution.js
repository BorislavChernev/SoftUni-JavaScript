function solve() {
	let input = document.getElementById('input');
	let output = document.getElementById('output');

	let text = input.value;
	let sentences = text.split('.').filter(function (x) {
		return x != '';
	});

	let currentP = '';
	let count = 0;
	for (let i = 0; i < sentences.length; i++) {
		currentP += sentences[i] + '.';
		currentP += '\n';
		count++;

		if (count == 3) {
			count = 0;
			output.innerHTML += `<p>${currentP}</p>`;

			currentP = ' ';
		} else if (count > 0 && sentences.length - i < 2) {
			output.innerHTML += `<p>${currentP}</p>`
			break;
		}
	}
	console.log(sentences[sentences.length - 1]);
}
