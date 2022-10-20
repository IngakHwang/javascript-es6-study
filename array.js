// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

console.log(arr1);
console.log(arr2);

const fruits = ['apple','banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[fruits.length-1]);

fruits.forEach((item, index) => console.log(item, index))

fruits.push('orange');      //마지막 index 추가
console.log(fruits);

fruits.pop();               //마지막 index 삭제
console.log(fruits);

fruits.shift();             //맨 앞 index 삭제
console.log(fruits);

fruits.unshift('melon');    //맨 앞 index 추가
console.log(fruits);

let pos = fruits.indexOf('melon');  // 배열 안 인덱스 찾기
console.log(pos);

//모르겠음
//let removedItem = fruits.splice(pos, 1);  //인덱스 위치 항목 제거??
let vegetables = ['양배추', '순무', '무','당근'];
console.log(vegetables);

let removedItem = vegetables.splice(1,2);
// 배열에서 항목을 제거하는 방법
// 1 인덱스부터 2개의 항목 제거

console.log(vegetables);        //제거된 후 배열
console.log(removedItem);       //제거한 아이템

let shallowCopySpread = [...vegetables];    // 배열 복사
console.log(shallowCopySpread);

let shallowCopySlice = shallowCopySpread.slice();
console.log(shallowCopySlice);


