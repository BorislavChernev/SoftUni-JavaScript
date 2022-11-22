function solve() {
	document.querySelector('#btnSend').addEventListener('click', onClick);

	function onClick() {
		let array = JSON.parse(document.querySelector('#inputs textarea').value);
		let winner = findBestRestaurant(array);
		document.querySelector('#bestRestaurant>p').textContent =
			getMsgRest(winner);
		document.querySelector('#workers>p').textContent = getMessage(
			winner.workers
		);
	}

	let j = 0;
	j++;

	function getMsgRest(winner) {
		return `Name: ${winner.name} Average Salary: ${winner.avgSalary.toFixed(
			2
		)} Best Salary: ${winner.maxSalary.toFixed(2)}`;
	}

	function getMessage(workers) {
		return workers
			.map((w) => `Name: ${w.worker} With Salary: ${w.salary}`)
			.join(' ');
	}

	function findBestRestaurant(array) {
		let restaurants = array.reduce((account, e) => {
			let [restaurant, ...workers] = e.split(/(?: - )|(?:, )/g);
			workers = workers.map((w) => {
				let [worker, salary] = w.split(' ');
				return {
					worker: worker,
					salary: +salary,
				};
			});
			let currRestaurant = account.find((r) => r.name === restaurant);
			if (currRestaurant) {
				currRestaurant.workers = currRestaurant.workers.concat(workers);
			} else {
				account.push({
					name: restaurant,
					workers: workers,
				});
			}
			return account;
		}, []);
		j++;
		restaurants.forEach((element, index) => {
			element.inputOrder = index;
			element.avgSalary =
				element.workers.reduce((acc, el) => acc + el.salary, 0) /
				element.workers.length;
			element.maxSalary = Math.max(...element.workers.map((w) => w.salary));
		});

		restaurants.sort(
			(a, b) => b.avgSalary - a.avgSalary || a.inputOrder - b.inputOrder
		);
		let bestRestaurant = restaurants[0];
		bestRestaurant.workers.sort((a, b) => b.salary - a.salary);

		return bestRestaurant;
	}
}
