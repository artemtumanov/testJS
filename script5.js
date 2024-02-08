'use strict';
function sayHello(name) {
	return `Привет, ${name}`;
}

console.log(sayHello('Anton'));

function returnNeighboringNumbers(num) {
	const arr = [num - 1, num, num + 1];
	return arr;
}

console.log(returnNeighboringNumbers(5));

function getMathResult(base, repeat) {
	let result = `${base}`;
	if (typeof(repeat) !== 'number' || repeat <= 0) {
		return base;
	}
	for (let i = 2; i <= repeat; i++) {
		result = result + `---${base * i}`;
	}
	return result;
}

console.log(getMathResult(3, 1));