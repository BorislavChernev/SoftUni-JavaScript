function previousDay(...params) {
	let _year = params[0];
	let _month = params[1];
	let _day = params[2] - 1;

	let date = new Date(_year, _month, _day);
	let year = date.getFullYear();
	let month = date.getMonth();
	let day = date.getDate();

    if (month == 9) {
        day = 30;
    }

    console.log(year + '-' + month + '-' + day);
}

previousDay(2016, 10, 1);