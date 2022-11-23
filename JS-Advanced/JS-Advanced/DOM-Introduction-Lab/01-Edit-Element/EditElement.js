function editElement(ref, match, replacer) {
	const content = ref.textContent;
	const matcher = new RegExp(match, 'g');
	const edited = content.replace(matcher, replacer);
	ref.textContent = edited;
}

let element = document.getElementById(e1);

editElement(element, '%', replacer)
