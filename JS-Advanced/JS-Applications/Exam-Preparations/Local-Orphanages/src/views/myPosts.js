import { html, nothing } from '../lib.js';
import { getAllItems, getAllItemsByName } from '../api/data.js';

const cardTemplate = (currItem, hasUser) => html`
	<div class="my-posts">
		<div class="post">
			<h2 class="post-title">${currItem.title}</h2>
			<img class="post-image" src="${currItem.imageUrl}" alt="Kids clothes" />
			<div class="btn-wrapper">
				<a href="/details/${currItem._id}" class="details-btn btn">Details</a>
			</div>
		</div>
	</div>
`;

const postCardTemplate = (allItems, hasUser) => html`
	<section id="my-posts-page">
		<h1 class="title">My Posts</h1>
		${allItems.length > 0
			? allItems.map((item) => cardTemplate(item, hasUser))
			: html` <h1 class="title no-posts-title">You have no posts yet!</h1>`}
	</section>
`;

export async function showMyPosts(ctx) {
	alert('Welcome to MyPosts!');
	let id = 0;
	if (ctx.user) {
		id = ctx.user._id;
	}
	const allItems = await getAllItemsByName(id);
	ctx.render(postCardTemplate(allItems, !!ctx.user));
}
