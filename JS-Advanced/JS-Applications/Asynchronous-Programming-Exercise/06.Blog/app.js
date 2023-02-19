function attachEvents() {
	document.getElementById('btnLoadPosts').addEventListener('click', getPosts);
	document.getElementById('btnViewPost').addEventListener('click', getComments);
}

async function getPosts() {
	const selectOp = document.getElementById('posts');
	const url = `http://localhost:3030/jsonstore/blog/posts`;
	selectOp.innerHTML = '';

	const response = await fetch(url);
	const data = await response.json();

	Object.values(data).forEach((post) => {
		const op = document.createElement('option');
		op.value = post.id;
		op.textContent = post.title;
		selectOp.appendChild(op);
	});
}

async function getComments() {
	const postUrl = `http://localhost:3030/jsonstore/blog/posts`;
	const commentsUrl = `http://localhost:3030/jsonstore/blog/comments`;

	const selectOp = document.getElementById('posts').selectedOptions[0].value;
	const titleElement = document.getElementById('post-title');
	const postBodyElement = document.getElementById('post-body');
	const postUlElement = document.getElementById('post-comments');
	postUlElement.innerHTML = '';

	const postResponse = await fetch(postUrl);
	const postData = await postResponse.json();

	const commentsResponse = await fetch(commentsUrl);
	const commentsData = await commentsResponse.json();

	const selectedPost = Object.values(postData).find(
		(post) => post.id == selectOp
	);
	titleElement.textContent = selectedPost.title;
	postBodyElement.textContent = selectedPost.body;

	const comments = Object.values(commentsData).filter(
		(c) => c.postId === selectOp
	);

	comments.forEach((c) => {
		const li = document.createElement('li');
		li.textContent = c.text;
		postUlElement.appendChild(li);
	});
}

attachEvents();
