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


function calculateVolumeAndArea(a) {
	if (a < 0 || a == '' || Number.isInteger(a) == false) {
		return  'При вычислении произошла ошибка';
	}
	return `Объем куба: ${a*a*a}, площадь всей поверхности: ${a*a*6}`;
}

console.log(calculateVolumeAndArea(-15));


function getCoupeNumber(a) {
	if (a == 0 || a > 36) {
		return 'Таких мест в вагоне не существует';
	} else if (typeof(a) == 'string' || Number.isInteger(a) == false || a < 0) {
		return 'Ошибка. Проверьте правильность введенного номера места';
	} else {
		return Math.ceil(a/4);
	}
}

console.log(getCoupeNumber(340));


function getTimeFromMinutes(a) {
	if (typeof(a) != 'number' || a < 0 || Number.isInteger(a) == false) {
		return 'Ошибка, проверьте данные';
	} else if (Math.trunc(a/60) == 0 || Math.trunc(a/60) >= 5 && Math.trunc(a/60) <= 10) {
		return `Это ${Math.trunc(a/60)} часов и ${a - Math.trunc(a/60)*60} минут`;
	} else if (Math.trunc(a/60) == 1) {
		return `Это ${Math.trunc(a/60)} час и ${a - Math.trunc(a/60)*60} минут`;
	} else if (Math.trunc(a/60) >= 2 && Math.trunc(a/60) <= 4) {
		return `Это ${Math.trunc(a/60)} часа и ${a - Math.trunc(a/60)*60} минут`;
	}
}

console.log(getTimeFromMinutes(10));


function findMaxNumber(a, b, c, d) {
	if (typeof(a) != 'number' || typeof(b) != 'number' || typeof(c) != 'number' || typeof(d) != 'number') {
		return 0;
	}
	let arr = [a, b, c, d];
	let result = a;
	for (let i = 0; i < arr.length; i++) {
		if (result > arr[i]) {
			continue;
		} else {
			result = arr[i];
			continue;
		}
	}
	return result;
}

console.log(findMaxNumber(-22, -1, -17, '1ds'));


function fib(a) {
	if (typeof(a) != 'number' || a == 0 || Number.isInteger(a) == false) {
		return '';
	}
	let b = 0;
	let c = 1;
	let d;
	let result = `${b} ${c}`;
	if (a == 1) {
		return `${b}`;
	} else if (a == 2) {
		return `${b} ${c}`;
	}
	for (let i = 2; i < a; i++) {
		d = b + c;
		result = result + ` ${b + c}`;
		b = c;
		c = d;
	}
	return result;
}

console.log(fib(13));