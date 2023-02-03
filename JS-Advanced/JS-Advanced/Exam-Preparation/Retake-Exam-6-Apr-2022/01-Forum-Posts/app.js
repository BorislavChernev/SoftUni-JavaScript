window.addEventListener('load', solve);

function solve() {
	let publishButton = document
		.getElementById('publish-btn')
		.addEventListener('click', createPost);

	let title = document.getElementById('post-title');
	let category = document.getElementById('post-category');
	let content = document.getElementById('post-content');
	let reviewList = document.getElementById('review-list');
	let publishList = document.getElementById('published-list');

	function createPost(e) {
		let titleValue = title.value;
		let categoryValue = category.value;
		let contentValue = content.value;
		if (!titleValue || !categoryValue || !contentValue) {
			return;
		}

		createDOMElements(titleValue, categoryValue, contentValue);
		title.value = '';
		category.value = '';
		content.value = '';
	}

	function createDOMElements(titleValue, categoryValue, contentValue) {
		let li = document.createElement('li');
		li.classList.add('rpost');

		let article = createArticle(titleValue, categoryValue, contentValue);
		let editButton = document.createElement('button');
		editButton.addEventListener('click', editPost);
		editButton.classList.add(`action-btn`);
		editButton.classList.add(`edit`);
		editButton.textContent = 'Edit';

		let approveButton = document.createElement('button');
		approveButton.addEventListener('click', approvePost);
		approveButton.classList.add(`action-btn`);
		approveButton.classList.add(`approve`);
		approveButton.textContent = 'Approve';

		let clearButton = document.getElementById('clear-btn');
		clearButton.addEventListener('click', clearPost);

		li.appendChild(article);
		li.appendChild(editButton);
		li.appendChild(approveButton);
		reviewList.appendChild(li);
	}

	function createArticle(titleValue, categoryValue, contentValue) {
		let article = document.createElement('article');
		let h4 = document.createElement('h4');
		h4.textContent = titleValue;

		let firstP = document.createElement('p');
		firstP.textContent = `Category: ${categoryValue}`;

		let secondP = document.createElement('p');
		secondP.textContent = `Content: ${contentValue}`;

		article.appendChild(h4);
		article.appendChild(firstP);
		article.appendChild(secondP);
		return article;
	}

	function editPost(e) {
		let currPost = e.target.parentElement;
		let article = currPost.getElementsByTagName('article')[0].children;

		let titleValue = article[0].textContent;
		let categoryValue = article[1].textContent;
		let contentValue = article[2].textContent;

		title.value = titleValue;
		category.value = categoryValue.substring(10, categoryValue.length);
		content.value = contentValue.substring(9, contentValue.length);
		currPost.remove();
	}

	function approvePost(e) {
		let currPost = e.target.parentElement;

		let liii = document.createElement('li');
		liii.classList.add('rpost');
		let art = currPost.getElementsByTagName('article')[0];
		debugger;
		liii.appendChild(art);
		publishList.appendChild(liii);
		currPost.remove();
	}

	function clearPost(e) {
		let lists = publishList.getElementsByClassName('rpost');
		while (lists.length > 0) {
			lists[0].remove();
		}
	}
}
