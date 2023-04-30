import { editItemById, getItemDetailsById } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const editTemplate = (currItem, handler) => html`
	<section id="edit">
		<div class="form">
			<h2>Edit Album</h2>
			<form @submit=${handler} class="edit-form">
				<input
					type="text"
					name="singer"
					id="album-singer"
					placeholder="Singer/Band"
					value="${currItem.singer}"
				/>
				<input
					type="text"
					name="album"
					id="album-album"
					placeholder="Album"
					value="${currItem.album}"
				/>
				<input
					type="text"
					name="imageUrl"
					id="album-img"
					placeholder="Image url"
					value="${currItem.imageUrl}"
				/>
				<input
					type="text"
					name="release"
					id="album-release"
					placeholder="Release date"
					value="${currItem.release}"
				/>
				<input
					type="text"
					name="label"
					id="album-label"
					placeholder="Label"
					value="${currItem.label}"
				/>
				<input
					type="text"
					name="sales"
					id="album-sales"
					placeholder="Sales"
					value="${currItem.sales}"
				/>

				<button type="submit">post</button>
			</form>
		</div>
	</section>
`;

export async function showEdit(ctx) {
	const id = ctx.params.id;
	const currItem = await getItemDetailsById(id);
	ctx.render(editTemplate(currItem, createSubmitHandler(onEdit)));

	async function onEdit(data) {
		const { singer, album, imageUrl, release, label, sales } = data;

		if (!singer || !album || !imageUrl || !release || !label || !sales) {
			return alert('All fields have to be filled in!');
		}

		await editItemById(id, data);
		ctx.page.redirect('/dashboard');
	}
}
