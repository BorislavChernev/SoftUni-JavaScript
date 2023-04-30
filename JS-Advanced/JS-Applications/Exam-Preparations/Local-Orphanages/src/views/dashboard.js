import { html, nothing } from '../lib.js';
import { getAllItems } from '../api/data.js';

const cardTemplate = (currItem, hasUser) => html`
	<div class="all-posts">
		<div class="post">
			<h2 class="post-title">${currItem.title}</h2>
			<img class="post-image" src="${currItem.imageUrl}" alt="Kids clothes" />
			<div class="btn-wrapper">
				<a href="/details/${currItem._id}" class="details-btn btn">Details</a>
			</div>
		</div>
	</div>
`;

const dashboardTemplate = (allItems, hasUser) => html`
	<section id="dashboard-page">
		<h1 class="title">All Posts</h1>

		${allItems.length > 0
			? allItems.map((item) => cardTemplate(item, hasUser))
			: html` <h1 class="title no-posts-title">No posts yet!</h1>`}
	</section>
	;
`;

export async function showDashboard(ctx) {
	alert('Welcome to dashboard!');
	const allItems = await getAllItems();
	ctx.render(dashboardTemplate(allItems, !!ctx.user));
}
