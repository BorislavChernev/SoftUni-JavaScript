import { getAllItemsByName } from '../api/data.js';
import { html, render, nothing } from '../lib.js';

const itemCardTemplate = (shoe, owner) => html`
	<li class="card">
		<img src="${shoe.imageUrl}" alt="travis" />
		<p><strong>Brand: </strong><span class="brand">${shoe.brand}</span></p>
		<p><strong>Model: </strong><span class="model">${shoe.model}</span></p>
		<p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>

		${owner
			? html`<a class="details-btn" href="/details/${shoe._id}">Details</a>`
			: nothing}
	</li>
`;

const searchTemplate = (allItems, owner, ctx) => html`
	<!-- Search Page (Only for logged-in users) -->
	<section id="search">
		<h2>Search by Brand</h2>

		<form class="search-wrapper cf" @submit=${(e) => onSearch(e, ctx)}>
			<input
				id="#search-input"
				type="text"
				name="search"
				placeholder="Search here..."
				required
			/>
			<button type="submit">Search</button>
		</form>

		<h3>Results:</h3>

		<div id="search-container">
			<ul class="card-wrapper">
				<!-- Display a li with information about every post (if any)-->
				${allItems.length === 0
					? html`<h2>There are no results found.</h2>`
					: allItems.map((shoe) => itemCardTemplate(shoe, owner))}
			</ul>
		</div>
	</section>
`;

async function onSearch(event, ctx) {
	event.preventDefault();

	const formData = new FormData(event.target);
	const query = formData.get('search').trim(); //name attribute

	ctx.page.redirect(`/search?query=${query}`);
}

export async function searchPage(ctx) {
	let owner = false;
	if (ctx.user) {
		owner = !!ctx.user._id;
	}

	const name = ctx.querystring.split('=')[1];
	const allItems = name == undefined ? [] : await getAllItemsByName(name);
	render(searchTemplate(allItems, owner, ctx), document.querySelector('main'));
}
