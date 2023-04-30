const url = `http://localhost:3030/jsonstore/collections/myboard/posts`;

document.getElementsByClassName('public')[0].addEventListener('click', post);
document.getElementsByClassName('cancel')[0].addEventListener('click', clear);
const form = document.querySelector('.new-topic-border form');

const title = document
	.getElementsByClassName('new-topic-title')[0]
	.querySelector('input');
const username = document
	.getElementsByClassName('new-topic-title')[1]
	.querySelector('input');
const content = document.querySelector('.new-topic-content textarea');

async function post(e) {
	e.preventDefault();

	const formData = new FormData(form);

	const { topicName, username, postText } = Object.fromEntries(formData);
	if (topicName == '' || (username == '') | (postText == '')) {
		return;
	}

	const body = {
		topicName,
		username,
		postText,
	};

	const header = getHeader('post', body);

	const response = await fetch(url, header);
	debugger;
	const data = await response.json();
	debugger;

    
}

function clear(e) {
	e.preventDefault();

	title.value = '';
	username.value = '';
	content.value = '';
}

function getHeader(method, body) {
	return {
		method: method,
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(body),
	};
}
