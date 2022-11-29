function solve() {
	let text = document.querySelectorAll('textarea');
	let textBody = document.querySelector('tbody');

	[...document.querySelectorAll('button')].forEach((button) =>
		button.addEventListener('click', execute)
	);
	function execute(btn) {
		if (!text[0].value) return;
		if (btn.target.textContent === 'Generate') {
			let input = JSON.parse(text[0].value);
			input.forEach((furniture) => {
				textBody.innerHTML += `<tr>
          <td><img src=${furniture.img}></td>
          <td><p>${furniture.name}</p></td>
          <td><p>${furniture.price}</p></td>
          <td><p>${furniture.decFactor}</p></td>
          <td><input type="checkbox"/></td>
          </tr>`;
			});
		} else {
			let furnitureName = [];
			let totalPrice = 0;
			let factor = 0;
			[...document.querySelectorAll('input:checked')].forEach((furniture) => {
				let pRow = furniture.parentNode.parentNode;
				factor += Number(pRow.children[3].textContent);
				totalPrice += Number(pRow.children[2].textContent);
				furnitureName.push(pRow.children[1].textContent);
			});
			text[1].textContent += `Bought furniture: ${furnitureName.join(
				', '
			)}\n`;
			text[1].textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
			text[1].textContent += `Average decoration factor: ${
				factor / furnitureName.length
			}`;
		}
	}
}
