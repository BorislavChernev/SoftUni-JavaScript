import { createItem } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const createTemplate = (handler) => html`
	<section id="create">
		<div class="form">
			<h2>Add item</h2>
			<form @submit=${handler} class="create-form">
				<input type="text" name="brand" id="shoe-brand" placeholder="Brand" />
				<input type="text" name="model" id="shoe-model" placeholder="Model" />
				<input
					type="text"
					name="imageUrl"
					id="shoe-img"
					placeholder="Image url"
				/>
				<input
					type="text"
					name="release"
					id="shoe-release"
					placeholder="Release date"
				/>
				<input
					type="text"
					name="designer"
					id="shoe-designer"
					placeholder="Designer"
				/>
				<input type="text" name="value" id="shoe-value" placeholder="Value" />

				<button type="submit">post</button>
			</form>
		</div>
	</section>
`;

export async function showCreate(ctx) {
	ctx.render(createTemplate(createSubmitHandler(onCreate)));

	async function onCreate(data) {
		//CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE

		const { brand, model, imageUrl, release, designer, value } = data;

		if (!brand || !model || !imageUrl || !release || !designer || !value) {
			return alert('All fields have to be filled in!');
		}

		//CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE

		await createItem(data);
		ctx.page.redirect('/dashboard');
	}
}
