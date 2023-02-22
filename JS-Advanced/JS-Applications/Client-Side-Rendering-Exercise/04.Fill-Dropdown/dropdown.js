import { render, html } from './node_modules/lit-html/lit-html.js';

const url = `http://localhost:3030/jsonstore/advanced/dropdown`;
const root = document.getElementById('menu');
const inputField = document.getElementById('itemText');

window.addEventListener('DOMContentLoaded', LoadAllOptions);
document.querySelector('form').addEventListener('submit', addItem);

async function addItem(e) {
	e.preventDefault();

	const text = inputField.value;

	const body = {
		text: text,
		_id: '',
	};

	await requestRender('POST', url, body);

	LoadAllOptions();
}

async function LoadAllOptions() {
	const allOptions = await requestRender('GET', url);

	render(allOptions, root);
}

async function requestRender(method, url, body) {
	const headers = getHeader(method, body);

	const response = await fetch(url, headers);
	if (method === 'GET') {
	const data = await response.json();

		const allOptions = renderAllOptions(data);

		return allOptions;
	}
}

function renderAllOptions(options) {
	let template;

	if (Object.values(options).length > 2) {
		template = html`
			${Object.values(options).map((option) => createOption(option))}
		`;
	} else {
		template = html` ${createOption(options)} `;
	}

	return template;
}

function createOption(option) {
	return html` <option value="${option._id}">${option.text}</option> `;
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
