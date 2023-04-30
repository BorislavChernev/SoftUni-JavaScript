import { deleteItemById, getItemDetailsById } from '../api/data.js';
import { html, nothing } from '../lib.js';

const detailsTemplate = (currItem, owner, onDelete, hasUser) => html`
	<section id="details-page">
		<h1 class="title">Post Details</h1>

		<div id="container">
			<div id="details">
				<div class="image-wrapper">
					<img
						src="./images/clothes.jpeg"
						alt="Material Image"
						class="post-image"
					/>
				</div>
				<div class="info">
					<h2 class="title post-title">Clothes</h2>
					<p class="post-description">
						Description: ${currItem.description}
					</p>
					<p class="post-address">Address: ${currItem.address}</p>
					<p class="post-number">Phone number: ${currItem.phone}</p>
					<p class="donate-Item">Donate Materials: 0</p>

					${
						owner
							? html`					<div class="btns">
						<a href="/edit/${currItem._id}" class="edit-btn btn">Edit</a>
						<a @click=${onDelete} href="javascript:void(0) class="delete-btn btn">Delete</a>`
							: nothing
					}
					</div>
				</div>
			</div>
		</div>
	</section>
`;

export async function showDetails(ctx) {
	const id = ctx.params.id;
	const currItem = await getItemDetailsById(id);
	let owner = false;
	if (ctx.user) {
		owner = currItem._ownerId === ctx.user._id;
	}
	const hasUser = !!ctx.user;
	ctx.render(detailsTemplate(currItem, owner, onDelete, hasUser));

	async function onDelete() {
		const userConfirmMessage = confirm('are you sure?');
		if (!userConfirmMessage) {
			return;
		}
		await deleteItemById(id);
		ctx.page.redirect('/dashboard');
	}
}
