const personalPlanPeter = {
	name: 'Peter',
	age: '29',
	skills: {
		languages: ['ru', 'eng'],
		programmingLangs: {
			js: '20%',
			php: '10%'
		},
		exp: '1 month'
	},
	showAgeAndLangs: function(plan) {
		const {languages} = plan.skills;
		return `Мне ${plan.age} и я владею языками: ${languages.join(' ').toUpperCase()}`;
	}
};
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));


function showExperience(plan) {
	return plan.skills.exp;
}

console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
	let result = '';
	let {programmingLangs} = plan.skills;
	for (let key in programmingLangs) {
		result = result + `Язык ${key} изучен на ${programmingLangs[key]}\n`;
	}
	return result;
}

console.log(showProgrammingLangs(personalPlanPeter));


const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
	let result = '';
	if (arr.length == 0) {
		return result += 'Семья пуста';
	} else {
		return result += `Семья состоит из: ${arr.join(' ')}`;
	}
}

console.log(showFamily(family));



const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
	return arr.join('\n').toLowerCase();
}

console.log(standardizeStrings(favoriteCities));

const someString = 'This is some strange string';

function reverse(str) {
	if (typeof(str) != 'string') {
		return 'Ошибка';
	}
	let normArr = str.split('');
	const newArr = normArr.map(function(item, i) {
		return item = normArr[normArr.length - i - 1];
	});
	return newArr.join('');
}

console.log(reverse(someString));