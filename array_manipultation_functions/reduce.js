/* reduce(callbackFunction, initialValue) */
// 배열을 모든 요소 순회하며 인수로 전달받은 콜백함수 반복 호출
// 콜백 함수의 반환값을 다음 순회 시에 촐백 함수의 첫번 째 인수로 전달
// 콜백 함수를 호출하여 하나의 결과값을 만들어 반환

const beforeReduceArray = [5,6,7,8];
console.log(`Reduce 전 : ${beforeReduceArray}`)

const sumWithInitial = beforeReduceArray.reduce(
    (previousValue, currentValue, indexNumber, array) => {
        console.log(`pre = ${previousValue}, cur = ${currentValue}, index = ${indexNumber}, array = ${array}`)
        console.log(`진행 중 : ${previousValue} + ${currentValue}`);
        return previousValue + currentValue
    },0
);

console.log(`Reduce 배열 값 더하기 : ${sumWithInitial}\n`);

const values = [1,2,3,4,5,6,7,9,8];
const average = values.reduce((acc, cur, i, {length}) => {
    console.log(`acc = ${acc}, cur = ${cur}, index = ${i}, length = ${length}`)
    return i === length -1 ? (acc + cur) / length : acc + cur;
},0);
console.log(`Reduce 평균 값 구하기 : ${average}\n`);

const max = values.reduce((acc, cur) => {
    console.log(`acc = ${acc}, cur = ${cur}`)
    return acc > cur ? acc : cur
},0);
console.log(`Reduce 최대 값 구하기 : ${max}`);