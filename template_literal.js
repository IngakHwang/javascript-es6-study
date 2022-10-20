/* 일반 문자열 멀티라인 불가 */
// let str = "Hello
// world.";

// log :
// SyntaxError : Invalid or unexpected token

/* 일반 문자열 + 이스케이프 시퀀스 */
let template = "<ul>\n\t<li><a href='#'>Home</a></li>\n</ul>"
console.log(template);

// log : 
// <ul>
//   <li><a href='#'>Home</a></li>
// </ul>

/* template literal */
let templateLiteral = `<ul>
    <li><a href='#'>Home</a></li>
</ul>`
console.log(template);

// log : 
// <ul>
//   <li><a href='#'>Home</a></li>
// </ul>



/* 표현식 삽입 */
let firstName = "Ingak";
let lastName = "Hwang";

console.log("My name is " + lastName + firstName);
// log : 
// My name is HwangIngak

console.log(`My name is ${lastName+firstName}`);
// log : 
// My name is HwangIngak

//표현식 삽입 expression interpolation
