function DayOfWeek(day) {
	let days = [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday',
	];
	let numbers = [1, 2, 3, 4, 5, 6, 7];

	let index = days.indexOf(day);
	if (index >= 0 && index <= numbers.length) {
		console.log(numbers[index]);
	} else console.log('error');
}
