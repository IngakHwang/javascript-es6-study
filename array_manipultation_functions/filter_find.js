/* filter(callback) */
// 배열의 모든 요소를 순회하면서 인수로 받은 콜백 함수를 반복 호출
// 반환값이 true인 요소로만 구성된 새로운 배열 반환

const beforeFilterArray = ['apple','microsoft','amazon','samsung','kakao','naver'];
const afterFilterArray = beforeFilterArray.filter(word => word.length > 6);
console.log(`filter 결과 : ${afterFilterArray}\n`);

/* find(callback) */
// 배열의 요소를 순회하면서 인수로 전달된 콜백 함수 호출 해서
// 반환값이 true인 첫 번째 요소 반환
// 반환값이 true인 요소 없으면 undefined 반환

const beforeFindArray = [5, 12, 8, 130, 44];
const afterFindArray = beforeFindArray.find(element => element > 39);
console.log(`find 결과 : ${afterFindArray}\n`);

console.log(`fliter 예시 : ` + [1,2,2,3].filter(item => item === 2));
console.log(`find 예시 : ` + [1,2,2,3].find(item => item === 2));

/* findIndex()*/
// 배열의 요소를 순회하면서 인수로 전달된 콜백함수 호출하여 반환값이 true인 첫 번째 요소의 인덱스 반환
// 반환값이 true인 요소 없으면 -1 반환
let counter = 0;
const users = [
    {id: counter++, name: 'Lee'},
    {id: counter++, name: 'Kim'},
    {id: counter++, name: 'Hwang'},
    {id: counter++, name: 'Seo'}
];

console.log(users.findIndex(user => user.id === 2));
console.log(users.findIndex(user => user.name === 'Park'));