// Import inn the main html src app.js
import { render, page } from './lib.js';
import { getUserData } from './util.js';

// Make second

// Import views
import { updateNav } from './views/nav.js';
import { showLogin } from './views/login.js';
import { showDashboard } from './views/dashboard.js';
import { showDetails } from './views/details.js';
import { showCreate } from './views/create.js';
import { showEdit } from './views/edit.js';
import { showRegister } from './views/register.js';
import { showHome } from './views/home.js';
import { searchPage } from './views/search.js';

// THIS MIGHT THROW AN ERROR
const main = document.querySelector('main');

//  Attach middle ware. May hav some difference
page(decorateContext);
page('/', showHome);
page('/home', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/dashboard', showDashboard);
page('/details/:id', showDetails);
page('/create', showCreate);
page('/edit/:id', showEdit);
page('/search', searchPage);

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