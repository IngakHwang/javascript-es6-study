/* some(callback) */
// 배열의 요소를 순회하면서 인수로 전달된 콜백 함수 호출
// 이 때 콜백 함수의 반환값이 단 한번이라도 참이면 true,
// 모두 거짓이면 false 반환
// 배열 요수 중 콜백 함수를 통해 정의한 조건을 만족하는 요소가 1개 이상 존재하는 지 확인하여 불리언 타입 반환

const beforeSomeArray = [1,2,3,4,5];
const even = (element) => element % 2 === 0;
console.log("some Test : " + beforeSomeArray.some(even));

console.log("some Test : " + [5,10,15].some(item => item>10));
console.log("some Test : " + [5,10,15].some(item => item<0));
// 빈 배열은 언제 false
console.log("some Test : " + [].some(item => item>3));       

/* every() */
// 배열의 요소를 순회하면서 인수로 전달된 콜백 함수 호출
// 반환값이 모두 참이면 true,
// 단 한번이라도 거짓이면 false 반환
// 정의한 조건을 모두 만족하는지 확인하여 불리언 타입 반환
/* every(callback) */
const beforeEveryArray = [1,30,39,29,10,13];
const isBelowThreshold = (currentValue) => currentValue < 40;
console.log("every Test : " + beforeEveryArray.every(isBelowThreshold));

console.log("every Test : " + [5,10,15].every(item => item>3));
console.log("every Test : " +[5,10,15].every(item => item<0));
// 빈 배열은 언제 true
console.log("every Test : " +[].every(item => item>3));