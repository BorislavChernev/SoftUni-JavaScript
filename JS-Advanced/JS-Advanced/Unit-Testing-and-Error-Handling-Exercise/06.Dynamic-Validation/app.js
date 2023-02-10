function validate() {
	let input = document.getElementById('email');
	let emailPattern = /[\w]+@[\w]+.[\w]+/g;

	input.addEventListener('change', (e) => {
		let email = e.target.value;
		if (emailPattern.test(email)) {
			e.target.classList.remove('error');
		} else {
			e.target.classList.add('error');
		}
	});
}
