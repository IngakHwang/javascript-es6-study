/* 기존 함수 생성 */
let add = function(num1, num2){
    return num1 + num2;
}

/* arrow function 사용 */
let arrowAdd = (num1,num2) =>{
    return num1 + num2;
}

/* return 문은 중괄호가 아닌 일반괄호로 바꿀 수 있음 */
let arrowAdd2 = (num1,num2) =>(num1 + num2);

/* return 문이 한 줄이라면 괄호 생략 가능 */
let arrowAdd3 = (num1,num2) =>num1 + num2;

/* 인수가 하나라면 괄호 생략 가능 */
let sayHello = name => `Hello, ${name}`

/* 인수가 없는 함수라면 괄호 생략 불가 */
let showError = () => {
    console.log('error!');
}

/* return 전에 여러 줄이 코드가 있다면 일반괄호 사용 불가능 */
let addTwoLine = (num1,num2) =>{
    const result = num1 + num2;
    return result;
}

console.log(add(1,2));
console.log(arrowAdd(2,3));
console.log(arrowAdd2(3,4));
console.log(arrowAdd3(4,5));
console.log(sayHello("Ingak"))
showError();
console.log(addTwoLine(10,10));