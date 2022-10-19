function solve() {
	let content = '';

	return {
		append: (s) => (content += s),
		removeStart: (n) => (content = content.substring(n, content.length)),
		removeEnd: (n) => (content = content.substring(0, content.length - n)),
		print: () => console.log(content),
	};
}

let firstZero = solve();
let secondZero = solve();
let commander = solve();

firstZero.append('123');
firstZero.append('45');
firstZero.removeStart(2);
firstZero.removeEnd(1);

firstZero.print();

secondZero.append('hello');
secondZero.append('again');
secondZero.removeStart(3);
secondZero.removeEnd(4);

secondZero.print();

commander.append('Sharo');
commander.append('Kotka');
commander.removeStart(3);
commander.removeEnd(1);

commander.print();
