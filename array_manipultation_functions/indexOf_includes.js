/* indexOf(elements) */

// 원본 배열에서 인수로 전달된 요소를 검색하여 인덱스 반환
// 배열에 특정 요소가 존재하는 지 확인할 때 유용
//  인수로 전달된 요소와 중복되는 요소가 여러 개 있다면 첫 번째로 검색된 요소의 인덱스 반환
//  인수로 전달한 요소가 존재하지 않으먼 -1 반환

const arr = [1,2,2,3];

// 배열에서 요소 2를 검색하여 첫 번째로 검색된 요소의 인덱스 반환
console.log(arr.indexOf(2));

// 배열에서 요소 4가 없으므로 -1 반환
console.log(arr.indexOf(4));

// 두 번째 인수는 검색을 시작한 인덱스
// 두 번째 인수 생략 시 처음 부터 검색
console.log(arr.indexOf(4,2));


const fruits = ['apple', 'banana'];

console.log(fruits);

if(fruits.indexOf('orange') === -1){
    fruits.push('orange');
}

console.log(fruits);

// indexOf 대신 includes를 사용하면 가독성이 더 좋다.

/* includes(elements)) */
// 배열 내 특정 요소가 포함되어 있는지 확인 -> Boolean 반환
// 첫번 째 인수로 검색할 대상 지정

if(!fruits.includes('grapes')){
    fruits.push('grapes');
}

console.log(fruits);