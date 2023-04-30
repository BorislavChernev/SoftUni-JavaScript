window.addEventListener('DOMContentLoaded', onLoadHTML);
document.getElementById('#register').addEventListener('click', Logout);
const welcome = document.querySelector('nav p span');
document
	.getElementsByClassName('load')[0]
	.addEventListener('click', LoadCatches);

document.getElementById('addForm').addEventListener('submit', createCatch);

async function Logout() {
	const url = `http://localhost:3030/users/logout`;

	const header = getHeader('GET', null);
	const response = await fetch(url, header);
	sessionStorage.clear();
	onLoadHTML();
}

function onLoadHTML() {
	const token = sessionStorage.accessToken;
	const userName = document.querySelector('p .email span');
	const addBtn = document.querySelector('.add');

	if (token) {
		document.getElementById('guest').style.display = 'none';
		document.getElementById('user').style.display = 'inline-block';
		userName.innerHTML = sessionStorage.email;
		addBtn.disabled = false;
	} else {
		document.getElementById('guest').style.display = 'inline-block';
		document.getElementById('user').style.display = 'none';
		userName.innerHTML = 'guest';
		addBtn.disabled = true;
	}
}

function createCatch(e) {
	e.preventDefault();

	const form = e.target.parentElement;
	const formData = new FormData(form);
	const data = Object.fromEntries(formData);
	onCreateCatch(data);
}

async function onCreateCatch(body) {
	const url = 'http://localhost:3030/data/catches ';

	const header = getHeader('post', body);
	const response = await fetch(url, header);
	const data = await response.json();
	return data;
}

async function LoadCatches(e) {
	e.preventDefault();
}

function getHeader(method, body) {
	const token = sessionStorage.accessToken;

	const header = {
		method: `${method}`,
		headers: {
			'Content-type': 'application/json',
			'X-Authorization': token,
		},
	};

	if (body) {
		header.body = JSON.stringify(body);
	}

	return header;
}
