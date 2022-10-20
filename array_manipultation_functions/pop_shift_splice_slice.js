/* pop() */
// 배열 마지막 요소 삭제
// 원본 배열을 바꾼다.
const popArray = ['item1','item2','Need pop item'];
console.log(`before pop : ${popArray}`);
popArray.pop();
console.log(`after pop : ${popArray} \n`);

/* shift() */
// 배열 첫번째 요소 삭제
// 원본 배열을 바꾼다.
const shiftArray = ['Need shift item', 'item1', 'item2'];
console.log(`before shift : ${shiftArray}`);
shiftArray.shift();
console.log(`after shift : ${shiftArray} \n`);

/* splice(start, deleteCount, items) */
// 원본 배열을 바꾼다.
// 원본 배열의 중간에 요소를 추가,제거 하는 경우 splice 메서드 사용
// start : 원본 배열 요소 제거하기 시작할 인덱스
// delteCount : start 부터 제거할 요소의 개수, 0인 경우 아무 요소도 제거되지 않는다. (option)
// items : 제거한 위치에 삽입할 요소들의 목록, 생략 시 요소들 제거만 함 (option)
const spliceArray = [1,2,3,4];
const spliceResultArray = spliceArray.splice(1,2,20,30);
console.log(`splice 후 제거한 요소들 : ${spliceResultArray}`);        //제거한 요소가 배열로 반환
console.log(`splice 후 원본+교체된 요소들 : ${spliceArray}\n`)            //원본 배열 변경

const exampleSpliceArray = [1,2,3,1,2];
console.log(`splice 전 : ${exampleSpliceArray}`)

function remove(array, item){
    // 요소 찾기
    const index = array.indexOf(item);

    if(index !== -1) array.splice(index, 1);

    return array;
}

remove(exampleSpliceArray, 2);
console.log(`splcie 후 : ${exampleSpliceArray}\n`);

/* slice(start, end) */
// 인수로 전달된 범위 요소들을 복사하여 배열로 반환
// start : 복사를 시작할 인덱스
// end : 복사를 종료할 인덱스, 생략시 start 부터 모든 요소 복사
const beforeSliceArray = ['item1','item2','dummy','dummy','dummy','item3'];
const afterSliceArray = beforeSliceArray.slice(2,5);
console.log(`slice 후 : ${afterSliceArray}`);