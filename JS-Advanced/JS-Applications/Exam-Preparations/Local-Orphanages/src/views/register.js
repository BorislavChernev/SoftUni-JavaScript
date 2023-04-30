import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';
import { register } from '../api/user.js';

const registerTemplate = (handler) => html`
	<section id="register-page" class="auth">
		<form @submit=${handler} id="register">
			<h1 class="title">Register</h1>

			<article class="input-group">
				<label for="register-email">Email: </label>
				<input type="email" id="register-email" name="email" />
			</article>

			<article class="input-group">
				<label for="register-password">Password: </label>
				<input type="password" id="register-password" name="password" />
			</article>

			<article class="input-group">
				<label for="repeat-password">Repeat Password: </label>
				<input type="password" id="repeat-password" name="repeatPassword" />
			</article>

			<input type="submit" class="btn submit-btn" value="Register" />
		</form>
	</section>
`;

export async function showRegister(ctx) {
	ctx.render(registerTemplate(createSubmitHandler(onRegister)));

	async function onRegister(data) {
		//CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE NAME OF SECOND PASSWORD
		const secondPasswordName = 'repeatPassword';
		if (!data.email || !data.password || !data[secondPasswordName]) {
			return alert('all fields are required!');
		}
		//CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE NAME OF SECOND PASSWORD

		if (data.password !== data[secondPasswordName]) {
			return alert('passwords do not match!');
		}

		//CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE NAME OF SECOND PASSWORD

		await register(data.email, data.password);
		ctx.updateNav();
		ctx.page.redirect('/');
	}
}
