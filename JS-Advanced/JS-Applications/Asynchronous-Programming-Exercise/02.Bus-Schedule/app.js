function solve() {
	const info = document.getElementById('info');
	const departButton = document.getElementById('depart');
	const arriveButton = document.getElementById('arrive');

	let nextStop = 'depot';
	let nextStopData;

	async function depart() {
		departButton.disabled = true;
		arriveButton.disabled = false;

		nextStop = await getStopData(nextStop);
		info.textContent = `Next stop ${nextStopData.name}`;
	}

	function arrive() {
		departButton.disabled = false;
		arriveButton.disabled = true;

		info.textContent = `Arriving at ${nextStopData.name}`;
        nextStop = nextStopData.next;
	}

	async function getStopData(id) {
		try {
			let response = await fetch(
				`http://localhost:3030/jsonstore/bus/schedule/${id}`
			);
			let data = await response.json();

			return data;
		} catch (error) {
			info.textContent = 'Error';
			departButton.disabled = true;
			arriveButton.disabled = true;
		}
	}

	return {
		depart,
		arrive,
	};
}

let result = solve();
