import { html, nothing } from '../lib.js';
import { getAllItems } from '../api/data.js';

const cardTemplate = (currItem, hasUser) => html`
	<ul class="card-wrapper">
		<!-- Display a li with information about every post (if any)-->
		<li class="card">
			<img src="${currItem.imageUrl}" alt="travis" />
			<p>
				<strong>Singer/Band: </strong
				><span class="singer">${currItem.singer}</span>
			</p>
			<p>
				<strong>Album name: </strong
				><span class="album">${currItem.album}</span>
			</p>
			<p><strong>Sales:</strong><span class="sales">${currItem.sales}</span></p>
			<a class="details-btn" href="/details/${currItem._id}">Details</a>
		</li>
	</ul>
`;

const dashboardTemplate = (allItems, hasUser) => html`
	<section id="dashboard">
		<h2>Albums</h2>

		${allItems.length > 0
			? allItems.map((item) => cardTemplate(item, hasUser))
			: html` <h2>There are no albums added yet.</h2>`}
	</section>
	;


export async function showDashboard(ctx) {
	alert('Welcome to dashboard!');
	const allItems = await getAllItems();
	ctx.render(dashboardTemplate(allItems, !!ctx.user));
}
