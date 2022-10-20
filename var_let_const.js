/* Const vs Let vs Var */

const pi = 3.14;
// pi = 1; 
// TypeError : Assignment to constant variable.

let letValue = 10;
console.log(`letValue is ${letValue}`);
// codeLine 10000
// let letValue = 'String Value';
// SyntaxError: Identifier 'letValue' has already been declared

for(let letValue = 0; letValue<3; letValue++){
    console.log(letValue);
}
// console.log(i);
// ReferenceError : i is not defined.

var varValue1 = 10;
console.log(`varValue1 is ${varValue1}`)
// codeLine 10000
var varValue1 = "String Value";
console.log(`varValue1 is ${varValue1}`)

for(var varValue2 = 0; varValue2<3; varValue2++){
    console.log(varValue2);
}
console.log(`is j live? - ${varValue2}`);