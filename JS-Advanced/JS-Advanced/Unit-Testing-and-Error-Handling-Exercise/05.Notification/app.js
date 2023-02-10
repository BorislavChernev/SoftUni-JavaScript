function notify(message) {
	let notification = document.getElementById('notification');

	notification.style.display = 'block';

	notification.textContent = 'Something happened!';

	notification.addEventListener('click', (e) => {
		e.target.style.display = 'none';
	});
}
