import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';
import { register } from '../api/user.js';

const registerTemplate = (handler) => html`
	<section id="register">
		<div class="form">
			<h2>Register</h2>
			<form @submit=${handler} class="login-form">
				<input
					type="text"
					name="email"
					id="register-email"
					placeholder="email"
				/>
				<input
					type="password"
					name="password"
					id="register-password"
					placeholder="password"
				/>
				<input
					type="password"
					name="re-password"
					id="repeat-password"
					placeholder="repeat password"
				/>
				<button type="submit">login</button>
				<p class="message">Already registered? <a href="#">Login</a></p>
			</form>
		</div>
	</section>
`;

export async function showRegister(ctx) {
	ctx.render(registerTemplate(createSubmitHandler(onRegister)));

	async function onRegister(data) {
		//CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE NAME OF SECOND PASSWORD
		const secondPasswordName = 're-password';
		if (!data.email || !data.password || !data['re-password']) {
			return alert('all fields are required!');
		}
		//CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE NAME OF SECOND PASSWORD

		if (data.password !== data['re-password']) {
			return alert('passwords do not match!');
		}

		//CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE NAME OF SECOND PASSWORD

		await register(data.email, data.password);
		ctx.updateNav();
		ctx.page.redirect('/');
	}
}
