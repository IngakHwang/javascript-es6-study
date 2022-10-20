/* forEach() */
// 배열의 모든 요소를 순회하며 콜백 함수를 호출
// 원본 배열을 변경하지 않지만 콜백 함수를 통해 원본 배열을 변경할 수 있다.
// 반환값은 언제나 undefined

const forEachArray = ['auto','crypt','fuzzer'];

const test = forEachArray.forEach(element => console.log(`forEach 함수 호출 : ${element}`));
console.log(`forEach 반환값 : ${test}\n`);

/* map() */
// 배열의 모든 요소를 순회하면서 인수로 받은 콜백 함수 반복 호출
// 콜백 함수의 반환값들로 구성된 새로운 배열 반환
// 원본 배열 변경되지 않는다.

const beforeMapArray = [1,4,9,16];
const afterMapArray = beforeMapArray.map(x => x ** 2);
console.log('map 반환 값');
console.log(afterMapArray);

// forEach, map 공통점은 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백 함수를 반복 호출
// 다른점은 forEach는 언제나 undefined 반환, map은 콜백함수의 반환값들로 구성된 새로운 배열 반환
