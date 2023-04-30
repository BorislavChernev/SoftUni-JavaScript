import { createItem } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const createTemplate = (handler) => html`
	<section id="create-page" class="auth">
		<form @submit=${handler} id="create">
			<h1 class="title">Create Post</h1>

			<article class="input-group">
				<label for="title">Post Title</label>
				<input type="title" name="title" id="title" />
			</article>

			<article class="input-group">
				<label for="description">Description of the needs </label>
				<input type="text" name="description" id="description" />
			</article>

			<article class="input-group">
				<label for="imageUrl"> Needed materials image </label>
				<input type="text" name="imageUrl" id="imageUrl" />
			</article>

			<article class="input-group">
				<label for="address">Address of the orphanage</label>
				<input type="text" name="address" id="address" />
			</article>

			<article class="input-group">
				<label for="phone">Phone number of orphanage employee</label>
				<input type="text" name="phone" id="phone" />
			</article>

			<input type="submit" class="btn submit" value="Create Post" />
		</form>
	</section>
`;

export async function showCreate(ctx) {
	ctx.render(createTemplate(createSubmitHandler(onCreate)));

	async function onCreate(data) {
		//CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE

		const { title, description, imageUrl, address, phone } = data;

		if (!title || !description || !imageUrl || !address || !phone) {
			return alert('All fields have to be filled in!');
		}

		//CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE

		await createItem(data);
		ctx.page.redirect('/dashboard');
	}
}
