import { html, nothing } from '../lib.js';
import { getAllAlbumsMatchingGivenName } from '../api/data.js';

// const searchPage = document.querySelector('#searchPage');
const can = false;
let hasUser = false;
let currentCTX = null;
async function searchTemplate(name, hasUser) {
	const albums = await getAllAlbumsMatchingGivenName(name);
	return html`
		<section id="searchPage">
			<h1>Search by Name</h1>

			<div class="search">
				<input
					id="search-input"
					type="text"
					name="search"
					placeholder="Enter desired albums's name"
				/>
				${hasUser
					? html`<button
							@click=${ctx.render(searchTemplate(name, hasUser))}
							class="button-list"
					  >
							Search
					  </button>`
					: nothing}
			</div>

			<h2>Results:</h2>

			${albums && can
				? html`${searchedCatalogTemplate(albums, hasUser)}`
				: html` <p>No Albums in Catalog!</p>`}
			<!--Show after click Search button-->
		</section>
	`;
}

const searchedCatalogTemplate = (albums, hasUser) => html`
	<div class="search-result">
		${albums.length > 0
			? albums.map((album) => {
					html` <div class="search-result">
						<!--If have matches-->
						${albums.length > 0
							? html` <div class="card-box">
									<img src="./images/BrandiCarlile.png" />
									<div>
										<div class="text-center">
											<p class="name">Name: In These Silent Days</p>
											<p class="artist">Artist: Brandi Carlile</p>
											<p class="genre">Genre: Low Country Sound Music</p>
											<p class="price">Price: $12.80</p>
											<p class="date">Release Date: October 1, 2021</p>
										</div>
										${hasUser
											? html` <div class="btn-group">
													<a href="#" id="details">Details</a>
											  </div>`
											: nothing}
									</div>
							  </div>`
							: html`<p class="no-result">No result.</p>`}
					</div>`;
			  })
			: nothing}
	</div>
`;

export async function showSearch(ctx) {
	debugger;
	hasUser = !!ctx.user ? !!ctx.user : !ctx.user;

	const doIt = () => {
		const name = document.getElementById('search-input').value;
		if (!name) {
			return alert('Search field cannot be empty');
		}
		currentCTX = ctx;
		ctx.render(searchTemplate(name, hasUser));
	};

	ctx.render(html` <section id="searchPage">
		<h1>Search by Name</h1>

		<div class="search">
			<input
				id="search-input"
				type="text"
				name="search"
				placeholder="Enter desired albums's name"
			/>
			<button @click=${doIt} class="button-list">Search</button>
		</div>

		<h2>Results:</h2>

		<div class="search-result"></div>
	</section>`);
}
