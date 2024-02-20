// Задача на рекурсию. Найти факториал

function factorial(n) {
	if (typeof(n) != 'number' || !Number.isInteger(n)) {
		return 'Число либо не целое либо не число вовсе';
	} else if (n<=0) {
		return 1;
	} else {
		if (n===1) {
			return 1;
		} else {
			return n * factorial(n-1);
		}
	}
}

console.log(factorial(4.5));