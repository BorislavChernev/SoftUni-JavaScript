import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';
import { updateNav } from './nav.js';
import { register } from '../api/user.js';

const registerTemplate = (handler) => html`
	<section id="registerPage">
		<form @submit=${handler}>
			<fieldset>
				<legend>Register</legend>

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

				<label for="conf-pass" class="vhide">Confirm Password:</label>
				<input
					id="conf-pass"
					class="conf-pass"
					name="conf-pass"
					type="password"
					placeholder="Confirm Password"
				/>

				<button type="submit" class="register">Register</button>

				<p class="field">
					<span>If you already have profile click <a href="#">here</a></span>
				</p>
			</fieldset>
		</form>
	</section>
`;

export async function showRegister(ctx) {
	ctx.render(registerTemplate(createSubmitHandler(onRegister)));

	async function onRegister(data) {
		if (!data.email || !data.password || !data['conf-pass']) {
			return alert('all fields are required!');
		}
		if (data.password !== data['conf-pass']) {
			return alert('passwords do not match!');
		}

		await register(data.email, data.password);
		ctx.updateNav();
		ctx.page.redirect('/');
	}
}
