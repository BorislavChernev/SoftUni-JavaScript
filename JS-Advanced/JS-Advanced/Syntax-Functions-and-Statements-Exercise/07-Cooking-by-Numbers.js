function cookingByNumber(startingPoint, ...params) {
	let number = parseInt(startingPoint);

	for (let i = 0; i < params.length; i++) {
		const operation = params[i];
		switch (operation) {
			case 'chop':
				number /= 2;
				break;
			case 'dice':
				number = Math.sqrt(number);
				break;
			case 'spice':
				number += 1;
				break;
			case 'bake':
				number *= 3;
				break;
			case 'fillet':
				number -= 0.2 * number;
				break;
		}
        console.log(number);
	}
}

cookingByNumber('9', 'dice', 'spice', 'chop', 'bake', 'fillet');