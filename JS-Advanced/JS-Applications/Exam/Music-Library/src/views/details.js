import { deleteItemById, getItemDetailsById } from '../api/data.js';
import { html, nothing } from '../lib.js';

const detailsTemplate = (currItem, owner, onDelete, hasUser) => html`
	<section id="details">
		<div id="details-wrapper">
			<p id="details-title">Album Details</p>
			<div id="img-wrapper">
				<img src="${currItem.imageUrl}" alt="example1" />
			</div>
			<div id="info-wrapper">
				<p>
					<strong>Band:</strong
					><span id="details-singer">${currItem.singer}</span>
				</p>
				<p>
					<strong>Album name:</strong
					><span id="details-album">${currItem.album}</span>
				</p>
				<p>
					<strong>Release date:</strong
					><span id="details-release">${currItem.release}</span>
				</p>
				<p>
					<strong>Label:</strong
					><span id="details-label">${currItem.label}</span>
				</p>
				<p>
					<strong>Sales:</strong
					><span id="details-sales">${currItem.sales}</span>
				</p>
			</div>
			<div id="likes">Likes: <span id="likes-count">0</span></div>

			${hasUser
				? html` <div id="action-buttons">
						${owner
							? html` <a href="/edit/${currItem._id}" id="edit-btn">Edit</a>
									<a
										@click=${onDelete}
										href="javascript:void(0)"
										id="delete-btn"
										>Delete</a
									>`
							: html`<a href="/" id="like-btn">Like</a>`}
				  </div>`
				: nothing}
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
