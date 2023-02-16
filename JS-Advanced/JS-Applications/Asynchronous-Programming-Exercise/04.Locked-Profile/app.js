//const profile = document.getElementsByClassName('user1Username')[0];
const button = document.querySelector('.profile button');
const url = `http://localhost:3030/jsonstore/advanced/profiles`;
const main = document.getElementById('main');

function lockedProfile() {
	window.addEventListener('DOMContentLoaded', loadProfiles);
}

async function loadProfiles() {
	const profiles = await getProfiles();

	Object.entries(profiles).forEach((element) => {
		main.innerHTML;

		const elDiv = document.createElement('div');
		elDiv.classList.add('profile');

		elDiv.innerHTML += `				<img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="${element[1].username}Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="${element[1].username}Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="${element[1].username}" value="${element[1].username}" disabled readonly />
				<div class="${element[1].username}">
					<hr>
					<label>Email:</label>
					<input type="email" name="${element[1].email}" value="${element[1].email}" disabled readonly />
					<label>Age:</label>
					<input type="text" name="${element[1].age}" value="${element[1].age}" disabled readonly />
				</div>`;

		const btn = document.createElement('button');
		btn.textContent = 'Show More';
		btn.addEventListener('click', hide);

		elDiv.appendChild(btn);

		elDiv.children[9].style.display = 'none';

		main.appendChild(elDiv);
	});
}

async function getProfiles() {
	const response = await fetch(url);
	const data = await response.json();
	return data;
}

function hide(e) {
	const text =
		e.target.parentElement.children[10].textContent == 'Hide it'
			? 'Show More'
			: 'Hide it';
	const displayStyle =
		e.target.parentElement.children[9].style.display == 'none'
			? 'block'
			: 'none';

	debugger;
	if (e.target.parentElement.children[4].checked) {
		e.target.parentElement.children[9].style.display = displayStyle;
		e.target.parentElement.children[10].textContent = text;
	}
}
