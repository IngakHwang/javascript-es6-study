/* for ... in*/
// object용 for문

let obj = {
    first:1,
    second:2,
    third:3
};

for (let inItem in obj){
    console.log(`key = ${inItem}, value = ${obj[inItem]}`);
}

// for (let ofItem of obj){
//     console.log(ofItem)
// }
//TypeError: obj is not iterable