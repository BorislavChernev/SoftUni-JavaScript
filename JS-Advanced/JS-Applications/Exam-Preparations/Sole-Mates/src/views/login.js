import { login } from '../api/user.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const loginTemplate = (handler) => html`
	<section id="login">
		<div class="form">
			<h2>Login</h2>
			<form @submit=${handler} class="login-form">
				<input type="text" name="email" id="email" placeholder="email" />
				<input
					type="password"
					name="password"
					id="password"
					placeholder="password"
				/>
				<button type="submit">login</button>
				<p class="message">Not registered? <a href="/register">Create an account</a></p>
			</form>
		</div>
	</section>
`;

export async function showLogin(ctx) {
	ctx.render(loginTemplate(createSubmitHandler(onLogin)));

	async function onLogin({ email, password }) {
        //HERE MIGHT BE THROWN AN ERROR (CHECK OBJECT)
		if (!email || !password) {
			return alert('all fields are required');
		}

		await login(email, password);
		ctx.updateNav();
		ctx.page.redirect('/dashboard');
	}
}
