const form = document.getElementById('register-form');
document
	.querySelector('form button')
	.addEventListener('click', RegisterHandler);

const errorP = document.querySelector('form .notification');

async function RegisterHandler(e) {
	e.preventDefault();

	const formData = new FormData(form);

	const { email, password, rePass } = Object.fromEntries(formData);

	if (password != rePass) {
		errorP.textContent = 'Error';
		setTimeout(() => {
			errorP.textContent = '';
		}, 1000);
	}

	OnRegister(email, password);
}

async function OnRegister(email, password) {
	const url = `http://localhost:3030/users/register`;

	const body = {
		email,
		password,
	};

	const header = getHeader('post', body);
	try {
		const response = await fetch(url, header);
		if (response.status == 409) {
			throw new Error('Error');
		}
		debugger;
		const data = await response.json();

		sessionStorage.setItem(
			'userData',
			JSON.stringify({
				email: data.email,
				accessToken: data.accessToken,
				id: data._id,
			})
		);

		window.location = 'index.html';

		return data;
	} catch (error) {
		errorP.textContent = 'Error';
		setTimeout(() => {
			errorP.textContent = '';
		}, 1000);
	}
}

function getHeader(method, body) {
	return {
		method: method,
		headers: { 'Content-type': 'application/json' },
		body: JSON.stringify(body),
	};
}
