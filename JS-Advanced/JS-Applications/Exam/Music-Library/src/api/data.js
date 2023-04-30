import { del, get, post, put } from './api.js';

const endpoints = {
	singles: '/data/albums',
	getAll: '/data/albums?sortBy=_createdOn%20desc',
	single: '/data/albums/',
};

export async function createItem(data) {
	debugger;
	return post(endpoints.singles, data);
}

// export async function getAllItemsByName(name) {
// 	const all = await get(endpoints.getAll);
// 	return all.filter((x) => x._ownerId == name); //CHANGE CHANGE CHANGE (name, brand and etc)
// }

export async function getAllItems() {
	return get(endpoints.getAll);
}

export async function getItemDetailsById(id) {
	return get(endpoints.single + id);
}

export async function deleteItemById(id) {
	return del(endpoints.single + id);
}

export async function editItemById(id, data) {
	return put(endpoints.single + id, data);
}
