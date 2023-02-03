function solve() {
	let firstName = document.getElementById('fname');
	let lastName = document.getElementById('lname');
	let mail = document.getElementById('email');
	let birthDate = document.getElementById('birth');
	let position = document.getElementById('position');
	let salary = document.getElementById('salary');

	let hireWorkerButton = document.getElementById('add-worker');
	hireWorkerButton.addEventListener('click', HireWorker);

	let processTable = document.getElementById('tbody');
	let budgetText = document.getElementById('sum');
	let budget = 0;

	function HireWorker(e) {
		e.preventDefault();

		let firstNameValue = firstName.value;
		let lastNameValue = lastName.value;
		let mailValue = mail.value;
		let birthDateValue = birthDate.value;
		let positionValue = position.value;
		let salaryValue = salary.value;

		if (
			!firstNameValue ||
			!lastNameValue ||
			!mailValue ||
			!birthDateValue ||
			!positionValue ||
			!salaryValue
		) {
			return 0;
		}

		createDOMElements(
			firstNameValue,
			lastNameValue,
			mailValue,
			birthDateValue,
			positionValue,
			salaryValue
		);

		firstName.value = '';
		lastName.value = '';
		mail.value = '';
		birthDate.value = '';
		position.value = '';
		salary.value = '';
	}

	function createDOMElements(
		firstNameValue,
		lastNameValue,
		mailValue,
		birthDateValue,
		positionValue,
		salaryValue
	) {
		let tr = document.createElement('tr');
		let tdFName = document.createElement('td');
		tdFName.textContent = firstNameValue;
		let tdLName = document.createElement('td');
		tdLName.textContent = lastNameValue;
		let tdMail = document.createElement('td');
		tdMail.textContent = mailValue;
		let tdBirthDate = document.createElement('td');
		tdBirthDate.textContent = birthDateValue;
		let tdPosition = document.createElement('td');
		tdPosition.textContent = positionValue;
		let tdSalary = document.createElement('td');
		tdSalary.textContent = salaryValue;
		budget += Number(salaryValue);

		let tdButtonFire = document.createElement('button');
		tdButtonFire.textContent = 'Fired';
		tdButtonFire.classList.add('fired');
		let tdButtonEdit = document.createElement('button');
		tdButtonEdit.addEventListener('click', Edit);
		tdButtonEdit.textContent = 'Edit';
		tdButtonEdit.classList.add('edit');

		tr.appendChild(tdFName);
		tr.appendChild(tdLName);
		tr.appendChild(tdMail);
		tr.appendChild(tdBirthDate);
		tr.appendChild(tdPosition);
		tr.appendChild(tdSalary);
		tr.appendChild(tdButtonFire);
		tr.appendChild(tdButtonEdit);

		processTable.appendChild(tr);
		budgetText.textContent = budget.toFixed(2);

		tdButtonFire.addEventListener('click', () => {
			budget -= Number(salaryValue);
			budgetText.textContent = budget.toFixed(2);
			event.target.parentElement.remove();
		});
	}

	function Edit(e) {
		let currTr = e.target.parentElement;

		firstName.value = currTr.children[0].textContent;
		lastName.value = currTr.children[1].textContent;
		mail.value = currTr.children[2].textContent;
		birthDate.value = currTr.children[3].textContent;
		position.value = currTr.children[4].textContent;
		salary.value = currTr.children[5].textContent;
		e.target.parentElement.remove();
		budget -= Number(currTr.children[5].textContent);
		budgetText.textContent = budget.toFixed(2);
	}
}
solve();
