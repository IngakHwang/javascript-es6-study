const names = "Ingak"
const age = 28

const test = {
    [names] : "이름",
    [age] : "나이"
}

console.log(test);

let counter = 0;
const cnt = () =>{
    return counter++
}

const obj = {
    [`a_${cnt()}`] : `${counter-1}`,
    [`a_${cnt()}`] : `${counter-1}`,
    [`a_${cnt()}`] : `${counter-1}`,
    [`a_${cnt()}`] : `${counter-1}`,
    [`a_${cnt()}`] : `${counter-1}`,
    [`a_${cnt()}`] : `${counter-1}`,
    [`a_${cnt()}`] : `${counter-1}`,
    [`a_${cnt()}`] : `${counter-1}`,
    [`a_${cnt()}`] : `${counter-1}`,
    [`a_${cnt()}`] : `${counter-1}`,
    [`a_${cnt()}`] : `${counter-1}`
}

console.log(obj);