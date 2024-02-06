//Первая задача
for (let i = 5; i < 11; i++) {
	console.log(i);
}

//Вторая задача
for (let i = 20; i > 9; i--) {
	if (i === 13) {
		break;
	}
	console.log(i);
}

//Третья задача
for (let  i = 2; i <= 10; i=i+2) {
	console.log(i);
}

for (let  i = 2; i <= 10; i++) {
	if (i % 2===0) {
		console.log(i);
	}
}

//Четвертая задача
for (let i = 2; i <= 16; i++) {
	if (i % 2 === 0) {
		continue;
	} else {
		console.log(i);
	}
}

let num = 2;
while(num <= 16) {
	
	if (num % 2 === 0) {
		num++;
		continue;
	} else {
		console.log(num);
	}
	num++;
}

//Пятая задача
const arr = [];
for (let i = 5; i <= 10; i++) {
	arr[i-5] = i;
}
console.log(arr);
console.log(arr[2]);

//Шестая задача
const arr1 = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 0; i < arr1.length; i++) {
	result[i] = arr1[i];
}
console.log(result);

//Седьмая задача
const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
	if (typeof(data[i]) == 'number') {
		data[i] = data[i] * 2;
	} else if (typeof(data[i]) == 'string') {
		data[i] = data[i] + ' - done';
	}
}

console.log(data);

//Восьмая задача
const data1 = [5, 10, 'Shopping', 20, 'Homework'];
const result1 = [];

for (let i = 0; i < data1.length; i++) {
	result1[i] = data1[data1.length - 1 - i];
}

console.log(result1);

//Девятая задача
const lines = 5;
let result2 = '';

for (let i = 0; i <= lines; i++) {
	for (let j = 0; j < lines - i; j++) {
		result2 += ' ';
	}
	for (let j = 0; j < 2 * i + 1; j++) {
		result2 += '*';
	}
	result2 += '\n';
}
console.log(result2);