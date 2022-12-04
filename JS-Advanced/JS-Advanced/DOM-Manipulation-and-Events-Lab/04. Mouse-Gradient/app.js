function attachGradientEvents() {
	let gradient = document.getElementById('gradient');

	gradient.addEventListener('mousemove', function (event) {
		let position = event.offsetX;
		let gradientWith = event.target.offsetWidth;

		let result = Math.trunc((position / gradientWith) * 100);

		document.getElementById('result').textContent = `${result}%`;
	});
}
