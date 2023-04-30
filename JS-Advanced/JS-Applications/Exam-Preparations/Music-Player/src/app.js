// Import inn the main html src app.js
import { showRegister } from './views/registerView.js';
import { render, page } from './lib.js';
import { getUserData } from './util.js';

// Make second

// Import views
import { showLogin } from './views/loginView.js';
import { updateNav } from './views/nav.js';
import { showHome } from './views/homeView.js';
import { showCreate } from './views/createView.js';
import { showCatalog } from './views/catalogView.js';
import { showDetails } from './views/detailsView.js';
import { showEdit } from './views/editView.js';
import { showSearch } from './views/searchView.js';

// get main element
const main = document.getElementById('main-content');

//  Attach middle ware. May hav some difference
page(decorateContext);
page('/', showHome);
page('/home', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/catalog', showCatalog);
page('/create', showCreate);
page('/search', showSearch);
page('/edit/:id', showEdit);
page('/details/:id', showDetails);

// update Navigation and start page
updateNav();
page.start();

function decorateContext(ctx, next) {
	ctx.render = renderMain;
	ctx.updateNav = updateNav;

	const user = getUserData();
	if (user) {
		ctx.user = user;
	}

	next();
}

function renderMain(content) {
	render(content, main);
}
