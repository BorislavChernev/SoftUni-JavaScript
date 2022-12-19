window.addEventListener('load', solve);

function solve() {
	let publishButton = document.getElementById('publish');
	publishButton.addEventListener('click', createOffer);

	let make = document.getElementById('make');
	let model = document.getElementById('model');
	let productionYear = document.getElementById('year');
	let fuelType = document.getElementById('fuel');

	let orgCost = document.getElementById('original-cost');
	let sellingPrice = document.getElementById('selling-price');

	let tableBody = document.getElementById('table-body');
	let carList = document.getElementById('cars-list');
	let profitP = document.getElementById('profit');
	let profit = 0;
	function createOffer(e) {
		e.preventDefault();

		createDOMElements();
		make.value = '';
		model.value = '';
		productionYear.value = '';
		fuelType.value = '';
		orgCost.value = '';
		sellingPrice.value = '';
	}

	function createDOMElements() {
		if (
			!make.value ||
			!model.value ||
			!productionYear.value ||
			!fuelType.value ||
			!orgCost.value ||
			!sellingPrice.value ||
			Number(sellingPrice.value) < Number(orgCost.value)
		) {
            return;
		}

		let tr = document.createElement('tr');
		tr.classList.add('row');

		let _make = document.createElement('td');
		_make.textContent = make.value;
		let _model = document.createElement('td');
		_model.textContent = model.value;
		let _year = document.createElement('td');
		_year.textContent = productionYear.value;
		let _fuelType = document.createElement('td');
		_fuelType.textContent = fuelType.value;
		let _orgCost = document.createElement('td');
		_orgCost.textContent = orgCost.value;
		let _sellingPrice = document.createElement('td');
		_sellingPrice.textContent = sellingPrice.value;

		tr.appendChild(_make);
		tr.appendChild(_model);
		tr.appendChild(_year);
		tr.appendChild(_fuelType);
		tr.appendChild(_orgCost);
		tr.appendChild(_sellingPrice);

		let buttonTD = document.createElement('td');
		let editButton = document.createElement('button');
		editButton.classList.add('action-btn');
		editButton.classList.add('edit');
		editButton.textContent = 'Edit';
		editButton.addEventListener('click', edit);

		let sellButton = document.createElement('button');
		sellButton.classList.add('action-btn');
		sellButton.classList.add('sell');
		sellButton.textContent = 'Sell';
		sellButton.addEventListener('click', sell);
		buttonTD.appendChild(editButton);
		buttonTD.appendChild(sellButton);

		tr.appendChild(buttonTD);
		tableBody.appendChild(tr);
	}

	function edit(e) {
		let tr = e.target.parentElement.parentElement;

		make.value = tr.children[0].textContent;
		model.value = tr.children[1].textContent;
		productionYear.value = tr.children[2].textContent;
		fuelType.value = tr.children[3].textContent;
		orgCost.value = tr.children[4].textContent;
		sellingPrice.value = tr.children[5].textContent;
		tr.remove();
	}

	function sell(e) {
		let tr = e.target.parentElement.parentElement;
		tr.getElementsByTagName('td')[6].remove();

		let li = document.createElement('li');
		li.classList.add('each-list');
		let span1 = document.createElement('span');
		span1.textContent = `${tr.children[0].textContent} ${tr.children[1].textContent}`;
		let span2 = document.createElement('span');
		span2.textContent = tr.children[2].textContent;
		let span3 = document.createElement('span');
		debugger;
		profit +=
			Number(tr.children[5].textContent) - Number(tr.children[4].textContent);
		span3.textContent =
			Number(tr.children[5].textContent) - Number(tr.children[4].textContent);
		li.appendChild(span1);
		li.appendChild(span2);
		li.appendChild(span3);

		tr.remove();
		carList.appendChild(li);

		profitP.textContent = Number(profit).toFixed(2);
	}
}
