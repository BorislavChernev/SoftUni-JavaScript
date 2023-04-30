export function getUserData() {
	const data = JSON.stringify(sessionStorage.getItem('userData'));
	return data;
}

export function setUserData(data) {
	sessionStorage.setItem('userData', JSON.stringify(data));
}

export function clearUserData() {
	sessionStorage.removeItem('userData');
}
