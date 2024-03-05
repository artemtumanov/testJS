'use strict';

const films = [
	{
		name: 'Titanic',
		rating: 9
	},
	{
		name: 'Die hard 5',
		rating: 5
	},
	{
		name: 'Matrix',
		rating: 8
	},
	{
		name: 'Some bad film',
		rating: 4
	}
];

function showGoodFilms(arr) {
	return arr.filter(item =>  item.rating >= 8);
}

console.log(showGoodFilms(films));

function showListOfFilms(arr) {
	return arr.map(item => item.name).reduce((str, curr) => `${str}, ${curr}`);
}

console.log(showListOfFilms(films));

function setFilmsIds(arr) {
	arr.forEach((item, i) => {
		item.id = i;
	});
	return arr;
}

console.log(setFilmsIds(films));

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
	return arr.every(item => item.hasOwnProperty('id'));
}

console.log(checkFilms(tranformedArray));



const funds = [
	{amount: 1400},
	{amount: 2400},
	{amount: 1000},
	{amount: 500},
	{amount: 10400},
	{amount: 11400}
];

const getPositiveIncomeAmount = (data) => {
	return data.filter(item => item.amount > 0).reduce((sum, curr) => (sum + curr.amount), 0);
};
console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
	if (data.some(item => item.amount < 0)) {
		return data.reduce((sum, curr) => (sum + curr.amount), 0);
	} else {
		return getPositiveIncomeAmount(data);
	}
};

console.log(getTotalIncomeAmount(funds)); 