const http = new easyHTTP();

http.get(`https://jsonplaceholder.typicode.com/posts/1`, function (
	err,
	response
) {
	if (err) {
		console.log(err);
	} else {
		console.log(response);
	}
});

const dataToPost = {
	title: "Custom Post 1",
	body: "This is a custom post",
};

http.post(`https://jsonplaceholder.typicode.com/posts`, dataToPost, function (
	err,
	response
) {
	if (err) {
		console.log(err);
	} else {
		console.log(response);
	}
});

http.put(`https://jsonplaceholder.typicode.com/posts/1`, dataToPost, function (err, response) {
    if (err) {
        console.log(err)
    } else {
        console.log(response)
    }
});


http.deletePost(`https://jsonplaceholder.typicode.com/posts/1`, function (err, response) {
    if (err) {
        console.log(err)
    } else {
        console.log(response)
    }
});
