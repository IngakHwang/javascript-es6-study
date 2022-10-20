/* toString() */
// 배열의 모든 요소를 문자열로 변환
// 구분자도 함께 출력됨
const beforeToStringArray = ['I','am', 'String'];
console.log(beforeToStringArray.toString());

/* join() */
// 배열의 모든 요소를 문자열로 변환
// 인수로 전달받은 문자열로 구분자를 바꿀 수 있음
const beforeJoinArray = ['I','am','String','Nice','To','Meet','You'];
console.log(beforeJoinArray.join());
console.log(beforeJoinArray.join(' '));