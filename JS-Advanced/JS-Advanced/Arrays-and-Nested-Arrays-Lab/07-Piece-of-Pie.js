function smallestTwoNumbers(array = [], firstString, SecondString) {
	let indexOfFirstString = array.indexOf(array.find((x) => x == firstString));
	let indexOfSecondString = array.indexOf(array.find((x) => x == SecondString));

	let result = array.slice(indexOfFirstString, indexOfSecondString + 1);
	return result;
}

smallestTwoNumbers(
	[
		'Apple Crisp',
		'Mississippi Mud Pie',
		'Pot Pie',
		'Steak and Cheese Pie',
		'Butter Chicken Pie',
		'Smoked Fish Pie',
	],
	'Pot Pie',
	'Smoked Fish Pie'
);
