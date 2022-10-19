function printArrayByGivenDelimeter(array = [], delimeter) {
	return array.join(delimeter);
}

console.log(
	printArrayByGivenDelimeter(['One', 'Two', 'Three', 'Four', 'Five'], '-')
);
