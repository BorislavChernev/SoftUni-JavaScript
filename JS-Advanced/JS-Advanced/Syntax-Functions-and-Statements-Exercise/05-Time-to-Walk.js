function timeToWalk(steps, stepLength, speed) {
	let distanceMeters = steps * stepLength;
	let speedMetersSec = speed / 3.6;
	let time = distanceMeters / speedMetersSec;
	let rest = Math.floor(distanceMeters / 500);

	let minutes = Math.floor(time / 60);
	let seconds = Math.round(time - minutes * 60);
	let hours = Math.floor(time / 3600);

	console.log(
		(hours < 10 ? '0' : '') +
			hours +
			':' +
			(minutes + rest < 10 ? '0' : '') +
			(minutes + rest) +
			':' +
			(seconds < 10 ? '0' : '') +
			seconds
	);
}

timeToWalk(4000, 0.6, 5);
