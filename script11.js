// function solution(str){
// 	let arr = str.split('');
// 	let newArr = [];
// 	arr.forEach((item, i) => {
// 		if (arr.length % 2 == 0) {
// 			if (i % 2 === 0) {
// 				newArr.push(arr[i] + arr[i+1]);
// 			}
// 		} else {
// 			if (i % 2 === 0 && i != (arr.length - 1)) {
// 				newArr.push(arr[i] + arr[i+1]);
// 			} else if (i == (arr.length - 1)) {
// 				newArr.push(arr[i] + '_')
// 			}
// 		}
		
// 	})
// 	return newArr;
// }

// console.log(solution('a'))


const solution = str => ((str+"_").match(/../g)||[]);
console.log(solution('asdasdasg'))