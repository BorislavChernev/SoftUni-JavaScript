import { render, html } from './node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';

document.querySelector('button').addEventListener('click', search);
const root = document.getElementById('towns');
const searchText = document.getElementById('searchText');
const result = document.getElementById('result');
let townsFound = 0;

function search(e) {
	e.preventDefault();

	const townsTemplate = html`
		<ul>
			${towns.map((town) => createTownList(town))}
		</ul>
	`;

	render(townsTemplate, root);
	Object.values(root.children[0].children).forEach((li) => {
		if (li.className === 'active') {
			townsFound++;
		}
	});
	result.textContent = `${townsFound} matches found`;
	townsFound = 0;
}

function createTownList(town) {
	return town.substring(0, searchText.value.length) == searchText.value
		? html`<li class="active">${town}</li>`
		: html`<li>${town}</li>`;
}
