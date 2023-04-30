import { deleteItemById, getItemDetailsById } from '../api/data.js';
import { html, nothing } from '../lib.js';

const detailsTemplate = (currItem, owner, onDelete) => html`
	<section id="details">
		<div id="details-wrapper">
			<p id="details-title">Shoe Details</p>
			<div id="img-wrapper">
				<img src="${currItem.imageUrl}" alt="example1" />
			</div>
			<div id="info-wrapper">
				<p>Brand: <span id="details-brand">${currItem.brand}</span></p>
				<p>Model: <span id="details-model">${currItem.model}</span></p>
				<p>
					Release date: <span id="details-release">${currItem.release}</span>
				</p>
				<p>Designer: <span id="details-designer">${currItem.designer}</span></p>
				<p>Value: <span id="details-value">${currItem.value}</span></p>
			</div>

			${owner
				? html` <div id="action-buttons">
						<a href="/edit/${currItem._id}" id="edit-btn">Edit</a>
						<a @click=${onDelete} href="javascript:void(0)" id="delete-btn"
							>Delete</a
						>
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
	ctx.render(detailsTemplate(currItem, owner, onDelete));

	async function onDelete() {
		const userConfirmMessage = confirm('are you sure?');
		if (!userConfirmMessage) {
			return;
		}
		await deleteItemById(id);
		ctx.page.redirect('/dashboard');
	}
}
