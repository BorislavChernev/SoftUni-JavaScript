import { render, html } from './node_modules/lit-html/lit-html.js';

window.addEventListener('DOMContentLoaded', loadAll);
document.querySelector('#searchBtn').addEventListener('click', onClick);

const inputField = document.getElementById('searchField');

const root = document.querySelector('.container tbody');
const tbody = document.querySelector('tbody');

const url = `http://localhost:3030/jsonstore/advanced/table`;

function onClick() {
	if (inputField.value == '') {
		return;
	}
	const selected = document.getElementsByClassName('select');
	Array.from(selected).forEach((el) => {
		el.classList.remove('select');
	});

	const text = inputField.value.toLowerCase();
	inputField.value = '';
	Array.from(root.children).forEach((tr) => {
		Array.from(tr.children).forEach((td) => {
			if (td.textContent.toLowerCase().indexOf(text) != -1) {
				td.parentElement.classList.add('select');
			}
		});
	});
}

async function loadAll() {
	const all = await requestRender('GET', url);

	render(all, root);
}

async function requestRender(method, url, body) {
	const headers = getHeader(method, body);

	const response = await fetch(url, headers);
	if (method === 'GET') {
		const data = await response.json();

		const all = renderAll(data);

		return all;
	}
}

function renderAll(all) {
	const template = html` ${Object.values(all).map((x) => createRow(x))} `;

	return template;
}

function createRow(row) {
	return html`
		<tr>
			<td>${row.firstName} ${row.lastName}</td>
			<td>${row.email}</td>
			<td>${row.course}</td>
		</tr>
	`;
}

function getHeader(method, body) {
	//const token = sessionStorage.accessToken;

	const header = {
		method: `${method}`,
		headers: {
			'Content-Type': 'application/json',
			//'X-Authorization': token,
		},
	};

	if (body) {
		header.body = JSON.stringify(body);
	}

	return header;
}
