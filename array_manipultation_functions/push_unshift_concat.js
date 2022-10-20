/* push() */
// 배열 마지막 요소에 입력값 추가
// 원본 배열을 바꾼다.
const pushArray = ['item1', 'item2', 'item3'];
console.log(`before push : ${pushArray}`);
pushArray.push('push item');
console.log(`after push : ${pushArray} \n`);

/* unshift() */
// 배열 첫번째 요소에 입력값 추가
// 원본 배열을 바꾼다.
// 스프레드 문법 사용 권장 -> const newArr = [item1, ...beforeUnshiftArray];
const unshiftArray = ['item2','item3'];
console.log(`before unshift : ${unshiftArray}`);
unshiftArray.unshift('unshift item');
console.log(`after unshift : ${unshiftArray} \n`);

/* concat() */
// 인수로 전달된 값들(배열, 원시값)을 원본 배열의 마지막 요솔 추가 후 새로운 배열 반환
// 인수로 전달한 값이 배열인 경우 배열을 해체하여 새로운 배열의 요소로 추가

const beforeConcatArray1 = ['a','b','c'];
const beforeConcatArray2 = ['d','e','f'];
console.log(`before concat1 : ${beforeConcatArray1}`);
console.log(`before concat2 : ${beforeConcatArray2}`);

const afterConcatArray = beforeConcatArray1.concat(beforeConcatArray2);
console.log(`after concat : ${afterConcatArray}`);