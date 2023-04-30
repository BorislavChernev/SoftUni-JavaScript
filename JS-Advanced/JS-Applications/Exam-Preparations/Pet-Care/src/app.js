import { page, render } from './lib.js';
import { showCatalog } from './views/catalog.js';
import { showHome } from './views/home.js';

const main = document.getElementById('content');

page(decorateContext);
page('/', showHome);
page('/catalog', showCatalog);
page('/catalog/:id', () => console.log('details'));
page('/create', () => console.log('create'));
page('/login', () => console.log('login'));
page('/register', () => console.log('register'));

page.start();

function decorateContext(ctx, next) {
	ctx.render = renderMain;

	next();
}

function renderMain(content) {
	render(content, main);
}
