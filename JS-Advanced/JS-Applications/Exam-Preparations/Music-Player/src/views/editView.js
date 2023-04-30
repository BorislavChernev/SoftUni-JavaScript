import { editAlbumById, getDetailsById } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const editTemplate = (currAlbum, handler) => html`
	<section class="editPage">
		<form @submit="${handler}">
			<fieldset>
				<legend>Edit Album</legend>

				<div class="container">
					<label for="name" class="vhide">Album name</label>
					<input
						id="name"
						name="name"
						class="name"
						type="text"
						value="${currAlbum.name}"
					/>

					<label for="imgUrl" class="vhide">Image Url</label>
					<input
						id="imgUrl"
						name="imgUrl"
						class="imgUrl"
						type="text"
						value="${currAlbum.imgUrl}"
					/>

					<label for="price" class="vhide">Price</label>
					<input
						id="price"
						name="price"
						class="price"
						type="text"
						value="${currAlbum.price}"
					/>

					<label for="releaseDate" class="vhide">Release date</label>
					<input
						id="releaseDate"
						name="releaseDate"
						class="releaseDate"
						type="text"
						value="${currAlbum.releaseDate}"
					/>

					<label for="artist" class="vhide">Artist</label>
					<input
						id="artist"
						name="artist"
						class="artist"
						type="text"
						value="${currAlbum.artist}"
					/>

					<label for="genre" class="vhide">Genre</label>
					<input
						id="genre"
						name="genre"
						class="genre"
						type="text"
						value="${currAlbum.genre}"
					/>

					<label for="description" class="vhide">Description</label>
					<textarea name="description" class="description" rows="10" cols="10">
					${currAlbum.description}
					</textarea
					>

					<button class="edit-album" type="submit">Edit Album</button>
				</div>
			</fieldset>
		</form>
	</section>
`;

export async function showEdit(ctx) {
	const id = ctx.params.id;
	const currAlbum = await getDetailsById(id);
	ctx.render(editTemplate(currAlbum, createSubmitHandler(onEdit)));

	async function onEdit(data) {
		const { name, imgUrl, price, releaseDate, artist, genre, description } =
			data;

		if (
			!name ||
			!imgUrl ||
			!price ||
			!releaseDate ||
			!artist ||
			!genre ||
			!description
		) {
			return alert('All fields are required!');
		}

		await editAlbumById(id, data);
		ctx.page.redirect('/catalog');
	}
}
