/* fill(값, 시작인덱스, 끝인덱스)*/
// 원본 배열 바꾼다.
// 채울 값을 시작인덱스 부터 끝 인덱스 까지 채운다.

const arr = [1,2,3];
arr.fill(0);
console.log(arr);

arr.fill(1,1);
console.log(arr);

arr.fill(2,2,3);
console.log(arr);

const fuzzer매출 = ['$',7];
fuzzer매출.length = 10;
fuzzer매출.fill(0,2,10);
console.log(`fuzzer매출 : ${fuzzer매출.join(' ')}`);