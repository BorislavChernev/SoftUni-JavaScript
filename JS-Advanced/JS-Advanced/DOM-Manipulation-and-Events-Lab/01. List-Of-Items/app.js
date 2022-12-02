function addItem() {
    let newItem = document.getElementById('newItemText').value;

    let li = document.createElement('li');
    li.textContent = newItem;

    let ul = document.getElementById('items');
    ul.appendChild(li);
}