function solve() {
	let text = document.getElementById('text').value.toLowerCase();
	let namingConvention = document.getElementById('naming-convention').value;

	let words = text.split(' ');
	let result = '';
	switch (namingConvention) {
		case 'Camel Case':
			result += words[0];

			for (let i = 1; i < words.length; i++) {
				result +=
					words[i][0].toUpperCase() +
					words[i].slice(1, words[i].length).toLowerCase();
			}
			break;
		case 'Pascal Case':
			for (let i = 0; i < words.length; i++) {
				result +=
					words[i][0].toUpperCase() +
					words[i].slice(1, words[i].length).toLowerCase();
			}
			break;
		default:
			result = 'Error!';
			break;
	}

	let resultSpan = document.getElementById('result');
	resultSpan.innerText = result;
}
