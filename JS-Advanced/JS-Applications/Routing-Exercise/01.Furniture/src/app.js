import { page, render, html, nothing } from './lib.js';

import { catalogView } from './view/catalog.js';
import { createView } from './view/create.js';
import { detailsView } from './view/details.js';
import { editView } from './view/edit.js';
import { loginView } from './view/login.js';
import { myFurnitureView } from './view/my-furniture.js';
import { registerView } from './view/register.js';

page('/', () => console.log('home')); //catalogView);
page('/catalog', () => console.log('catalogView')); //catalogView);
page('/create', () => console.log('createView')); //createView);
page('/details/:id', () => console.log('detailsView')); //detailsView);
page('/edit/:id', () => console.log('editView')); //editView);
page('/login', () => console.log('loginView')); //loginView);
page('/register', () => console.log('registerView')); //registerView);
page('/my-furniture', () => console.log('myFurnitureView')); //myFurnitureView);
page('/*', () => console.log('catalogView')); //catalogView);
page.start();
