function easyHTTP() {
	this.http = new XMLHttpRequest();
}
// Make an http get request
easyHTTP.prototype.get = function (url, callback) {
	this.http.open("get", url, true);

	let self = this;
	this.http.onload = function () {
		if (self.http.status === 200) {
			callback(null, self.http.responseText);
		} else {
			callback(`ERROR: ${self.http.status}`);
		}
	};

	this.http.send();
};

// Make an http post request

easyHTTP.prototype.post = function (url, data, callback) {
	this.http.open("post", url, true);

	this.http.setRequestHeader("Content-type", "application/json");

	let self = this;

	this.http.onload = function () {
		callback(null, self.http.responseText);
	};

	this.http.send(JSON.stringify(data));
};

// Make an http put request
easyHTTP.prototype.put = function (url, data, callback) {
	this.http.open("put", url, true);

	this.http.setRequestHeader("Content-type", "application/json");

	let self = this;

	this.http.onload = function () {
		callback(null, self.http.responseText);
	};

	this.http.send(JSON.stringify(data));
};
// Make an http delete request
easyHTTP.prototype.deletePost = function (url, callback) {
	this.http.open("delete", url, true);
	let self = this;

	this.http.onload = function () {
		if (self.http.status === 200) {
			callback(null, "POST DELETED");
		} else {
			callback(`Error: ${self.http.status}`);
		}
	};

	this.http.send();
};
