function lockedProfile() {
	let profiles = Array.from(document.getElementsByClassName('profile'));

	for (let profile of profiles) {
		let button = profile.querySelector('button');
		let DynamicText = profile.querySelector('div');
		button.addEventListener('click', function (event) {
			if (!profile.children[2].checked && button.textContent == 'Show more') {
				DynamicText.style.display = 'inline-block';
				button.textContent = 'Hide it';
			} else if (
				button.textContent == 'Hide it' &&
				!profile.children[2].checked
			) {
				DynamicText.style.display = 'none';
				button.textContent = 'Show more';
			}
		});
	}
}
