'use strict';

// const shoppingMallData = {
// 	shops: [
// 		{ width: 10, length: 5 },
// 		{ width: 15, length: 7 },
// 		{ width: 20, length: 5 },
// 		{ width: 8, length: 10 }
// 	],
// 	height: 5,
// 	moneyPer1m3: 30,
// 	budget: 50000
// };

// function isBudgetEnough(data) {
// 	const {shops} = data;
// 	let square = 0;
// 	for (let value of shops) {
// 		const {width, length} = value;
// 		square = square + width * length;
// 	}
// 	const volume = square * data.height;
// 	const heatCost = volume * data.moneyPer1m3;
	
// 	if (heatCost > data.budget) {
// 		return 'Бюджета недостаточно';
// 	} else {
// 		return 'Бюджета достаточно'; 
// 	}
// }

// function isBudgetEnough(data, callback) {
// 	if (callback(data) > data.budget) {
// 		return 'Бюджета недостаточно';
// 	} else {
// 		return 'Бюджета достаточно'; 
// 	}
// }

// function volume (data) {
// 	const {shops} = data;
// 	let square = 0;
// 	for (let value of shops) {
// 		const {width, length} = value;
// 		square = square + width * length;
// 	}
// 	const volume = square * data.height;
// 	const heatCost = volume * data.moneyPer1m3;
// 	return heatCost;
// }

// console.log(isBudgetEnough(shoppingMallData, volume));



const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takeshi'];

function sortStudentsByGroups(arr) {
	arr.sort();
	let newArr = [];
	let a = [];
	arr.forEach(function(item, i) {
		if (i % 3 == 0 && i != 0) {
			newArr.push(a);
			a = [];
		} else if ((i == arr.length - 1) && ((i+1) % 3 == 0)) {
			newArr.push(a);
		}
		a.push(item);
		
	});
	if (arr.length % 3 == 0) {
		newArr.push('Оставшиеся студенты: -');
	} else if (arr.length % 3 == 1) {
		newArr.push(`Оставшиеся студенты: ${arr[arr.length -1]}`);
	} else if (arr.length % 3 == 2) {
		newArr.push(`Оставшиеся студенты: ${arr[arr.length - 2]}, ${arr[arr.length - 1]}`);
	}
	
	return newArr;
}

console.log(sortStudentsByGroups(students));
