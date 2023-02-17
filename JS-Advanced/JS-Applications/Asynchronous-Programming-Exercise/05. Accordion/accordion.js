window.addEventListener('DOMContentLoaded', LoadPosts);
const main = document.getElementById('main');

function solution() {}

async function LoadPosts() {
	const url = `http://localhost:3030/jsonstore/advanced/articles/list`;
	const result = await fetch(url);
	const currData = await result.json();
	Object.entries(currData).forEach(async (element) => {
		const urlId = `http://localhost:3030/jsonstore/advanced/articles/details/${element[1]._id}`;
		const currResult = await fetch(urlId);
		const currData = await currResult.json();

		const div = document.createElement('div');
		div.classList.add('accordion');

		const head = document.createElement('div');
		head.classList.add('head');

		const span = document.createElement('span');
		span.textContent = currData.title;

		const button = document.createElement('button');
		button.id = element._id;
		button.classList.add('button');
		button.addEventListener('click', moreLess);
		button.textContent = 'More';

		head.appendChild(span);
		head.appendChild(button);

		const extra = document.createElement('div');
		extra.classList.add('extra');
		const p = document.createElement('p');
		p.textContent = currData.content;

		extra.appendChild(p);

		div.appendChild(head);
		div.appendChild(extra);

		main.append(div);
	});
}

function moreLess(e) {
	const text = e.target.textContent === 'More' ? 'Less' : 'More';

	e.target.parentElement.parentElement.children[1].classList.toggle('extra');
	e.target.textContent = text;
}
