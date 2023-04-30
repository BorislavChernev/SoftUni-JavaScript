import { editItemById, getItemDetailsById } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const editTemplate = (currItem, handler) => html`
	<section id="edit-page" class="auth">
		<form @submit=${handler} id="edit">
			<h1 class="title">Edit Post</h1>

			<article class="input-group">
				<label for="title">Post Title</label>
				<input type="title" name="title" id="title" value="${currItem.title}" />
			</article>

			<article class="input-group">
				<label for="description">Description of the needs </label>
				<input
					type="text"
					name="description"
					id="description"
					value="${currItem.description}"
				/>
			</article>

			<article class="input-group">
				<label for="imageUrl"> Needed materials image </label>
				<input
					type="text"
					name="imageUrl"
					id="imageUrl"
					value="${currItem.imageUrl}"
				/>
			</article>

			<article class="input-group">
				<label for="address">Address of the orphanage</label>
				<input
					type="text"
					name="address"
					id="address"
					value="${currItem.address}"
				/>
			</article>

			<article class="input-group">
				<label for="phone">Phone number of orphanage employee</label>
				<input type="text" name="phone" id="phone" value="${currItem.phone}" />
			</article>

			<input type="submit" class="btn submit" value="Edit Post" />
		</form>
	</section>
`;

export async function showEdit(ctx) {
	const id = ctx.params.id;
	const currItem = await getItemDetailsById(id);
	ctx.render(editTemplate(currItem, createSubmitHandler(onEdit)));

	async function onEdit(data) {
		//CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE

		const { title, description, imageUrl, address, phone } = data;

		if (!title || !description || !imageUrl || !address || !phone) {
			return alert('All fields have to be filled in!');
		}

		//CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE

		await editItemById(id, data);
		ctx.page.redirect('/dashboard');
	}
}
