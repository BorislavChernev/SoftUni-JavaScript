function requestValidatior(obj) {
	let validMethod = ['GET', 'POST', 'DELETE', 'CONNECT'];
	let uriPattern = /^[\w.]+$/g;
	let supportedVirsions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
	let supportedMessageChars = [`<`, `>`, `\\`, `&`, `'`, `"`];

	if (!validMethod.includes(obj.method)) {
		throw new Error('Invalid request header: Invalid Method');
	}
	if (!obj.hasOwnProperty('uri')) {
		throw new Error('Invalid request header: Invalid URI');
	}
	if (obj.uri !== '*' && !obj.uri.match(uriPattern)) {
		throw new Error('Invalid request header: Invalid URI');
	}
	if (!supportedVirsions.includes(obj.version)) {
		throw new Error('Invalid request header: Invalid Version');
	}
	if (!obj.hasOwnProperty('message')) {
		throw new Error('Invalid request header: Invalid Message');
	}
	for (let ch of obj.message) {
		if (supportedMessageChars.includes(ch)) {
			throw new Error('Invalid request header: Invalid Message');
		}
	}
	return obj;
}

requestValidatior({
	method: 'GET',
	uri: 'svn.public.catalog',
	version: 'HTTP/1.3',
	message: '',
});
