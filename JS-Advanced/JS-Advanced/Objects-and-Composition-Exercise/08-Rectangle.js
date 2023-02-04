function Rectangle(width, height, color) {
	let rec = {
		width,
		height,
		color: color[0].toUpperCase() + color.substring(1),
		calcArea: function () {
			return this.height * this.width;
		},
	};

	return rec;
}

let rec = Rectangle(5, 8, 'blue');
console.log(rec.width);
console.log(rec.height);
console.log(rec.color);
console.log(rec.calcArea());
