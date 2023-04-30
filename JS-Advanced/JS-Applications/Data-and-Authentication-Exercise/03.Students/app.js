const url = `http://localhost:3030/jsonstore/collections/students`;

const form = document.getElementById('form');
const tbody = document.querySelector('.container tbody');
const inputs = document.getElementsByClassName('inputs')[0];

document.getElementById('submit').addEventListener('click', SubmitForm);

async function SubmitForm(e) {
	e.preventDefault();

	const data = new FormData(formButton);
	AttachForm(data);
}

function AttachForm(data) {
	const { firstName, lastName, facultyNumber, grade } =
		Object.fromEntries(data);

	tbody.innerHTML += `<tr>
			<td>${firstName}</td>
			<td>${lastName}</td>
			<td>${facultyNumber}</td>
			<td>${grade}</td>
		</tr>`;

	for (let i = 0; i < inputs.children.length; i++) {
		const element = inputs.children[i];

		element.value = '';
	}
}
