import { editItemById, getItemDetailsById } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const editTemplate = (currItem, handler) => html`
	<section id="edit">
		<div class="form">
			<h2>Edit item</h2>
			<form @submit=${handler} class="edit-form">
				<input
					type="text"
					name="brand"
					id="shoe-brand"
					placeholder="Brand"
					value="${currItem.brand}"
				/>
				<input
					type="text"
					name="model"
					id="shoe-model"
					placeholder="Model"
					value="${currItem.model}"
				/>
				<input
					type="text"
					name="imageUrl"
					id="shoe-img"
					placeholder="Image url"
					value="${currItem.imageUrl}"
				/>
				<input
					type="text"
					name="release"
					id="shoe-release"
					placeholder="Release date"
					value="${currItem.release}"
				/>
				<input
					type="text"
					name="designer"
					id="shoe-designer"
					placeholder="Designer"
					value="${currItem.designer}"
				/>
				<input
					type="text"
					name="value"
					id="shoe-value"
					placeholder="Value"
					value="${currItem.value}"
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
		//CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE

		const { brand, model, imageUrl, release, designer, value } = data;

		if (!brand || !model || !imageUrl || !release || !designer || !value) {
			return alert('All fields have to be filled in!');
		}

		//CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE

		await editItemById(id, data);
		ctx.page.redirect('/dashboard');
	}
}
