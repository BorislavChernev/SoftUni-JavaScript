function addItem() {
	let ul = document.getElementById('items');

	let input = document.getElementById('newItemText');
	let value = input.value;

	let li = document.createElement('li');
	li.textContent = value + '';

	ul.appendChild(li);

	let deleteBtn = document.createElement('a');
	deleteBtn.href = '#';
	deleteBtn.textContent = 'Delete';
	deleteBtn.style.color = 'red';

	deleteBtn.addEventListener('click', function (event) {
		event.target.parentElement.remove();
	});

	li.appendChild(deleteBtn);

	value = '';
}
