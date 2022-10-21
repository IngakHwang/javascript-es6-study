/* for...of */
// array용 for문

let arr = ["arraryItem1","arraryItem2","arraryItem3"];
for (let ofItem of arr){
    console.log(`for of 결과 : ${ofItem}`);
}

arr[10] = "arrayItem10";

for (let inItem in arr){
    console.log(`for in 결과 : ${inItem}`);
}