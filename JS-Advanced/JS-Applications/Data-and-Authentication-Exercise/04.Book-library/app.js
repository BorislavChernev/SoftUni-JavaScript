const url = `http://localhost:3030/jsonstore/collections/books`;

document.getElementById('loadBooks').addEventListener('click', LoadAllBooks);
const bookList = document.querySelector(`table tbody`);
const form = document.querySelector('form');
const formButton = document.querySelector(`form button`);
formButton.addEventListener('click', createBook);

async function LoadAllBooks(e) {
	e.preventDefault();

	const response = await fetch(url);
	const data = await response.json();

	Object.entries(data).forEach((book) => {
		// bookList.innerHTML += `<tr>
		//     <td>${book[1].author}</td>
		//     <td>${book[1].title}</td>
		//     <td>
		//         <button onclick="">Edit</button>
		//         <button onclick="">Delete</button>
		//     </td>
		//  </tr>`;

		const tr = document.createElement('tr');

		const td1 = document.createElement('td');
		td1.textContent = book[1].author;

		const td2 = document.createElement('td');
		td2.textContent = book[1].title;

		tr.appendChild(td1);
		tr.appendChild(td2);

		const td3 = document.createElement('td');

		const editButton = document.createElement('button');
        editButton.textContent = 'Edit'
		editButton.addEventListener('click', EditBook);
        
		const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete'
		deleteButton.addEventListener('click', DeleteBook);

		td3.appendChild(editButton);
		td3.appendChild(deleteButton);

		tr.appendChild(td3);

		bookList.appendChild(tr);
	});
}

async function editBook(e) {
	e.preventDefault();
}

// <form>
//     <h3>FORM</h3>
//     <label>TITLE</label>
//     <input type="text" name="title" placeholder="Title...">
//     <label>AUTHOR</label>
//     <input type="text" name="author" placeholder="Author...">
//     <button>Submit</button>
// </form>

async function createBook(e) {
	e.preventDefault();

	// const author = formButton.getElementsByTagName('input')[0].value;
	// const title = formButton.getElementsByTagName('input')[1].value;

	const data = new FormData(form);
	const { author, title } = Object.fromEntries(data);
	if (author == '' || title == '') {
		return;
	}

	const dataForPost = { author: author, title: title };
	const response = await fetch(url, {
		method: 'post',
		headers: { 'Content-type': 'application/json' },
		body: JSON.stringify(dataForPost),
	});

	form.children[2].value = '';
	form.children[4].value = '';
}

async function EditBook(e) {
	e.preventDefault();
}

async function DeleteBook(e) {
	e.preventDefault();
}
