import { html, render, page } from '../lib.js';
import { getUserData } from '../util.js';
import { logout } from '../api/user.js';

const nav = document.querySelector('nav');

const navTemplate = (hasUser) => html`
	<nav>
		<div>
			<a href="/dashboard">Dashboard</a>
			<a href="/search">Search</a>
		</div>

		${hasUser
			? html` <div class="user">
					<a href="/create">Add Pair</a>
					<a @click="${onLogout}" href="javascript:void(0)">Logout</a>
			  </div>`
			: html` <div class="guest">
					<a href="/login">Login</a>
					<a href="/register">Register</a>
			  </div>`}
	</nav>
`;

export function updateNav() {
	// checks for user
	const user = getUserData();
	//  can be tested putting false or true
	render(navTemplate(user), nav);
}
function onLogout() {
	logout();
	updateNav();
	page.redirect('/');
}
