let recipient = document.getElementById('recipientName');
let title = document.getElementById('title');
let message = document.getElementById('message');

let addButton = document.getElementById('add');
addButton.addEventListener('click', createMail);

let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', reset);

let listOfMails = document.getElementById('list');
let listOfSentMails = document.getElementsByClassName('sent-list')[0];
let listOfDeletedMails = document.getElementsByClassName('delete-list')[0];

function createMail(e) {
	e.preventDefault();

	let recipientValue = recipient.value;
	let titleValue = title.value;
	let messageValue = message.value;
	if (!recipientValue || !titleValue || !messageValue) {
		return 0;
	}
	createDOMElements(recipientValue, titleValue, messageValue);
	recipient.value = '';
	title.value = '';
	message.value = '';
}

function reset(e) {
	e.preventDefault();

	recipient.value = '';
	title.value = '';
	message.value = '';
}

function createDOMElements(recipientValue, titleValue, messageValue) {
	let li = document.createElement('li');
	let h4 = document.createElement('h4');
	h4.textContent = `Title: ${titleValue}`;
	let h4_2 = document.createElement('h4');
	h4_2.textContent = `Recipient Name: ${recipientValue}`;
	let span = document.createElement('span');
	span.textContent = messageValue;
	let div = document.createElement('div');
	div.id = 'list-action';

	let sendB = document.createElement('button');
	sendB.addEventListener('click', sendMail);
	sendB.type = 'submit';
	sendB.id = 'send';
	sendB.textContent = 'Send';

	let deleteB = document.createElement('button');
	deleteB.addEventListener('click', deleteMail);
	deleteB.type = 'submit';
	deleteB.id = 'delete';
	deleteB.textContent = 'delete';

	li.appendChild(h4);
	li.appendChild(h4_2);
	li.appendChild(span);
	div.appendChild(sendB);
	div.appendChild(deleteB);
	li.appendChild(div);

	listOfMails.appendChild(li);
}

function deleteMail(e) {
	e.preventDefault();

	let currLi = e.target.parentElement.parentElement;

	let toExport = document.createElement('li');

	let spanTo = document.createElement('span');
	let toMail = currLi.children[1].textContent.split(' ')[2];
	spanTo.textContent = `To: ${toMail}`;

	let spanTitle = document.createElement('span');
	let title1 = currLi.children[0].textContent.split(': ')[1];
	spanTitle.textContent = `Title: ${title1}`;

	toExport.appendChild(spanTo);
	toExport.appendChild(spanTitle);

	listOfDeletedMails.appendChild(toExport);

	if (listOfSentMails.getElementsByTagName('li')[0]) {
		listOfSentMails.getElementsByTagName('li')[0].remove();
	}
	if (listOfMails.getElementsByTagName('li')[0]) {
		listOfMails.getElementsByTagName('li')[0].remove();
	}
}

function sendMail(e) {
	e.preventDefault();

	let currLi = e.target.parentElement.parentElement;

	let toExport = document.createElement('li');

	let spanTo = document.createElement('span');
	let toMail = currLi.children[1].textContent.split(' ')[2];
	spanTo.textContent = `To: ${toMail}`;

	let spanTitle = document.createElement('span');
	let title1 = currLi.children[0].textContent.split(': ')[1];
	spanTitle.textContent = `Title: ${title1}`;

	let div = document.createElement('div');
	div.classList.add('btn');

	let delB = document.createElement('button');
	delB.type = 'submit';
	delB.classList.add('delete');
	delB.textContent = 'Delete';
	delB.addEventListener('click', deleteMail);

	div.appendChild(delB);
	toExport.appendChild(spanTo);
	toExport.appendChild(spanTitle);

	toExport.appendChild(div);

	listOfSentMails.appendChild(toExport);
	listOfMails.remove();
}
