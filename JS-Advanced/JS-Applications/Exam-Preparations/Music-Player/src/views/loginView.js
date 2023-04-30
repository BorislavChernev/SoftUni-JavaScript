import { login } from '../api/user.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';
import { updateNav } from './nav.js';

const loginTemplate = (handler) => html`
	<section id="loginPage">
		<form @submit=${handler}>
			<fieldset>
				<legend>Login</legend>

				<label for="email" class="vhide">Email</label>
				<input
					id="email"
					class="email"
					name="email"
					type="text"
					placeholder="Email"
				/>

				<label for="password" class="vhide">Password</label>
				<input
					id="password"
					class="password"
					name="password"
					type="password"
					placeholder="Password"
				/>

				<button type="submit" class="login">Login</button>

				<p class="field">
					<span>If you don't have profile click <a href="#">here</a></span>
				</p>
			</fieldset>
		</form>
	</section>
`;

export async function showLogin(ctx) {
	ctx.render(loginTemplate(createSubmitHandler(onLogin)));

	async function onLogin({ email, password }) {
		debugger;
		if (!email || !password) {
			return alert('all fields are required');
		}

		await login(email, password);
		ctx.updateNav();
		ctx.page.redirect('/');
	}
}
