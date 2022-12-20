window.addEventListener('load', solve);

function solve() {
	let firstName = document.getElementById('first-name');
	let lastName = document.getElementById('last-name');
	let age = document.getElementById('age');
	let storyTitle = document.getElementById('story-title');
	let genre = document.getElementById('genre');
	let story = document.getElementById('story');
	let publishButton = document.getElementById('form-btn');
	publishButton.addEventListener('click', Publish);

	let previewSection = document.getElementById('preview-list');

	let mainDiv = document.getElementById('main');
	function Publish() {
		let firstNameValue = firstName.value;
		let lastNameValue = lastName.value;
		let ageValue = age.value;
		let storyTitleValue = storyTitle.value;
		let genreValue = genre.value;
		let storyValue = story.value;

		if (
			!firstNameValue ||
			!lastNameValue ||
			!ageValue ||
			!storyTitleValue ||
			!genreValue ||
			!storyValue
		) {
			return 0;
		}
		createDOMElements(
			firstNameValue,
			lastNameValue,
			ageValue,
			storyTitleValue,
			genreValue,
			storyValue
		);
	}

	function createDOMElements(
		firstNameValue,
		lastNameValue,
		ageValue,
		storyTitleValue,
		genreValue,
		storyValue
	) {
		let li = document.createElement('li');
		li.classList.add('story-info');
		let article = document.createElement('article');
		let h4 = document.createElement('h4');
		h4.textContent = `Name: ${firstNameValue} ${lastNameValue}`;
		let pAge = document.createElement('p');
		pAge.textContent = `Age: ${ageValue}`;
		let pTitle = document.createElement('p');
		pTitle.textContent = `Title: ${storyTitleValue}`;
		let pGenre = document.createElement('p');
		pGenre.textContent = `Genre: ${genreValue}`;
		let p = document.createElement('p');
		p.textContent = storyValue;

		article.appendChild(h4);
		article.appendChild(pAge);
		article.appendChild(pTitle);
		article.appendChild(pGenre);
		article.appendChild(p);

		let saveButton = document.createElement('button');
		saveButton.classList.add('save-btn');
		saveButton.textContent = 'Save Story';
		saveButton.addEventListener('click', () => {
			let childs = mainDiv.children;

			while (childs.length > 0) {
				mainDiv.children[0].remove();
			}

			let finalH1 = document.createElement('h1');
			finalH1.textContent = 'Your scary story is saved!';
			mainDiv.appendChild(finalH1);
		});

		let editButton = document.createElement('button');
		editButton.classList.add('edit-btn');
		editButton.textContent = 'Edit Story';
		editButton.addEventListener('click', () => {
			firstName.value = firstNameValue;
			lastName.value = lastNameValue;
			age.value = ageValue;
			storyTitle.value = storyTitleValue;
			genre.value = genreValue;
			story.value = storyValue;
			publishButton.disabled = false;
			editButton.parentElement.remove();
		});

		let deleteButton = document.createElement('button');
		deleteButton.classList.add('delete-btn');
		deleteButton.textContent = 'Delete Story';
		deleteButton.addEventListener('click', () => {
			publishButton.disabled = false;
			editButton.parentElement.remove();
		});

		li.appendChild(article);
		li.appendChild(saveButton);
		li.appendChild(editButton);
		li.appendChild(deleteButton);

		previewSection.appendChild(li);

		firstName.value = '';
		lastName.value = '';
		age.value = '';
		storyTitle.value = '';
		genre.value = '';
		story.value = '';
		publishButton.disabled = true;
	}
}
