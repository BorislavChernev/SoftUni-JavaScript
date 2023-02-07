function roadRadar(speed, zone) {
	let speedLimit;

	switch (zone) {
		case 'motorway':
			speedLimit = 130;
			break;
		case 'interstate':
			speedLimit = 90;
			break;
		case 'city':
			speedLimit = 50;
			break;
		case 'residential':
			speedLimit = 20;
			break;
	}

	let speedDiff = speed - speedLimit;
	let status = '';

	if (speedDiff > 0) {
		if (speedDiff <= 20) {
			status = 'speeding';
		} else if (speedDiff <= 40) {
			status = 'excessive speeding';
		} else {
			status = 'reckless driving';
		}

		console.log(
			`The speed is ${speedDiff} km/h faster than the allowed speed of ${speedLimit} - ${status}`
		);
	} else {
		console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
	}
}

roadRadar(200, 'motorway');
