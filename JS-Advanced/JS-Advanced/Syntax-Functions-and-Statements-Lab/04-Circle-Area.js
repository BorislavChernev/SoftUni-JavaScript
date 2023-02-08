function Circle_Area(input) {
	return isNaN(input)
		? console.log(
				`We can not calculate the circle area, because we receive a ${typeof input}.`
		  )
		: console.log((Math.pow(input, 2) * Math.PI).toFixed(2));
}