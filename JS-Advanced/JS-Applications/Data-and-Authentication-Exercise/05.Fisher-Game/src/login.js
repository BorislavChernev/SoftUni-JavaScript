const loginForm = document.getElementById('login-form');
document.querySelector('form button').addEventListener('click', loginHandler);
const errorP = document.querySelector('form .notification');

function loginHandler(e) {
	e.preventDefault();

	const formData = new FormData(loginForm);
	const { email, password } = Object.fromEntries(formData);

	onLogin(email, password);
}

async function onLogin(email, password) {
	const url = `http://localhost:3030/users/login`;

	const body = {
		email,
		password,
	};

	const header = getHeader('post', body);
	debugger;
	const response = await fetch(url, header);
	debugger;
	const data = await response.json();
	debugger;

	sessionStorage.setItem(
		'userData',
		JSON.stringify({
			email: data.email,
			accessToken: data.accessToken,
			id: data._id,
		})
	);

	try {
		if (sessionStorage.email == email) {
			throw new Error('Error');
		} else if (sessionStorage.password == password) {
			throw new Error('Error');
		} else if (!sessionStorage.accessToken) {
			throw new Error('Error');
		}
	} catch (error) {
		errorP.textContent = 'Error';
		setTimeout(() => {
			errorP.textContent = '';
		}, 1000);
	}

	window.location = 'index.html';

	return data;
}

function getHeader(method, body) {
	return {
		method: `${method}`,
		headers: { 'Content-type': 'application/json' },
		body: JSON.stringify(body),
	};
}
