import { html, nothing } from '../lib.js';
import { getAllItems } from '../api/data.js';

const cardTemplate = (currItem, hasUser) => html`
	<ul class="card-wrapper">
		<li class="card">
			<img src="${currItem.imageUrl}" alt="travis" />
			<p>
				<strong>Brand: </strong><span class="brand">${currItem.brand}</span>
			</p>
			<p>
				<strong>Model: </strong><span class="model">${currItem.model}</span>
			</p>
			<p>
				<strong>Value:</strong><span class="value">${currItem.value}</span>$
			</p>
			<a class="details-btn" href="/details/${currItem._id}">Details</a>
		</li>
	</ul>
`;

const dashboardTemplate = (allItems, hasUser) => html`
	<section id="dashboard">
		<h2>Collectibles</h2>

		${allItems.length > 0
			? allItems.map((item) => cardTemplate(item, hasUser))
			: html` <p>There are no items added yet.</p>`}
	</section>
`;

export async function showDashboard(ctx) {
	alert('Welcome to dashboard!');
	const allItems = await getAllItems();
	ctx.render(dashboardTemplate(allItems, !!ctx.user));
}
