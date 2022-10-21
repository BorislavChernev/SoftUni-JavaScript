function sortArray(input) {
	let twoCriteriaSort = (cur, next) =>
		cur.length - next.length || cur.localeCompare(next);
	input.sort(twoCriteriaSort);
	console.log(input.join('\n'));
}

sortArray(['alpha', 'beta', 'gamma']);