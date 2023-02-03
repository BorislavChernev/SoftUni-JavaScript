let sendFormButton = document
	.getElementById('right')
	.getElementsByTagName('button')[0]
	.addEventListener('click', createPost);

let receivedOrdersForm = document.getElementById('received-orders');
let startRepairButton;

let completedOrdersForm = document.getElementById('completed-orders');
let clearButton = completedOrdersForm.getElementsByTagName('button')[0];
clearButton.addEventListener('click', clear);
let productType = document.getElementById('type-product');
let description = document.getElementById('description');
let clientName = document.getElementById('client-name');
let clientPhone = document.getElementById('client-phone');
let i = 0;
function createPost(e) {
	e.preventDefault();
	if (i == 1) {
		debugger;
	}
	let productTypeValue = productType.value;
	let descriptionValue = description.value;
	let clientNameValue = clientName.value;
	let clientPhoneValue = clientPhone.value;
	if (
		!productTypeValue ||
		!descriptionValue ||
		!clientNameValue ||
		!clientPhoneValue
	) {
		return;
	}

	createDOMElements(
		productTypeValue,
		descriptionValue,
		clientNameValue,
		clientPhoneValue
	);

	productType.value = '';
	description.value = '';
	clientName.value = '';
	clientPhone.value = '';
	i++;
}

function createDOMElements(
	productTypeValue,
	descriptionValue,
	clientNameValue,
	clientPhoneValue
) {
	let div = document.createElement('div');
	div.classList.add('container');
	let h2 = document.createElement('h2');
	h2.textContent = `Product type for repair: ${productTypeValue}`;
	let h3 = document.createElement('h3');
	h3.textContent = `Client information: ${clientNameValue}, ${clientPhoneValue}`;
	let h4 = document.createElement('h4');
	h4.textContent = `Description of the problem: ${descriptionValue}`;

	let startButton = document.createElement('button');
	startButton.classList.add('start-btn');
	startButton.textContent = 'Start repair';

	let finishButton = document.createElement('button');
	finishButton.classList.add('finish-btn');
	finishButton.textContent = 'Finish repair';
	finishButton.disabled = true;

	div.appendChild(h2);
	div.appendChild(h3);
	div.appendChild(h4);
	div.appendChild(startButton);
	div.appendChild(finishButton);
	receivedOrdersForm.appendChild(div);

	startRepairButton = receivedOrdersForm.getElementsByTagName('button')[0];
	startRepairButton.addEventListener('click', startRepair);
}

function startRepair() {
	startRepairButton.disabled = true;
	receivedOrdersForm.getElementsByTagName('button')[1].disabled = false;
	receivedOrdersForm
		.getElementsByTagName('button')[1]
		.addEventListener('click', finishRepair);
}

function finishRepair(e) {
	let div = e.target.parentElement;

	div.getElementsByClassName('start-btn')[0].remove();
	div.getElementsByClassName('finish-btn')[0].remove();

	completedOrdersForm.appendChild(div);
}

function clear(e) {
	while (e.target.parentElement.getElementsByTagName('div')[0] !== undefined) {
		e.target.parentElement.getElementsByTagName('div')[0].remove();
	}
}
