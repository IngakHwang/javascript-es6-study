/* sort() */
// 오름차순으로 요소 정렬

const fruits = ['Banana', 'Oragne', 'Apple'];
fruits.sort();          // 오름차순 정렬
console.log(fruits);    // 원본 배열 직접 변경

/* reverse() */
const beforeReverseArray = ['d','c','b','a'];
const afterReverseArray = beforeReverseArray.reverse();
console.log(afterReverseArray);
console.log(beforeReverseArray);

//숫자 정렬
// sort 의 정렬 순서는 유니코드 코드 포인트의 순서를 따른다.
// 배열의 요소를 일시적으로 문자열로 변환 후 유니코드 포인트의 순서를 기준으로 정렬한다.
// '1' -> U+0031
// '2' -> U+0032
// '10' -> U+0031U+0030 '2' 보다 먼저 앞서서 정렬 된다.
// 숫자 요소 정렬 할 때는 정렬 순서를 정의하는 비교 함수를 인수로 전달해야 한다.
// 비교 함수는 양수나 음수 또는 0을 반환해야 한다.
// 비교 함수의 반환값이 0보다 작으면 비교 함수의 첫 번째 인수를 우선 정렬하고
// 0이면 정렬하지 않고
// 0보다 크면 두 번째 인수를 우선 정렬한다.

const points = [40, 100, 1, 5, 2, 25, 10];
// 숫자 배열의 오름차순 정렬
// 비교 함수의 반환값이 0보다 작으면 a를 우선하여 정렬한다.
points.sort((a,b) => a-b);
console.log(points);

// 슷자 배열의 내림차순 정렬
// 비교 함수의 반환값이 0보다 작으면 b를 우선하여 정렬한다.
points.sort((a,b) => b-a);
console.log(points);
