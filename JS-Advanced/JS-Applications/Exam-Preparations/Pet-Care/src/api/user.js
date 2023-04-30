import { clearUserData, setUserData } from '../util.js';
import { get, post } from './api.js';

export async function login(email, password) {
	const {
		id,
		email: resultEmail,
		accessToken,
	} = await post('/user/login', {
		email,
		password,
	});

	setUserData({
		_id,
		email: resultEmail,
		accessToken,
	});
}

export async function register(email, password) {
	const {
		id,
		email: resultEmail,
		accessToken,
	} = await post('/user/register', {
		email,
		password,
	});

	setUserData({
		_id,
		email: resultEmail,
		accessToken,
	});
}

export async function logout() {
	get('/users/logout');
    clearUserData();
}
