class Request {
	response = undefined;

	constructor(method, uri, version, message) {
		this.method = method;
		this.uri = uri;
		this.version = version;
		this.message = message;
		this.response = response;
		this.fulfilled = fulfilled;
	}

	fulfilled = false;
}

let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);
