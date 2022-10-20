function test(a,b, ...rest){
    console.log(a,b);
    console.log(rest);
}

test(1,2,3,4,5);

function printAll(...args){
    console.log(args);
    for(const arg of args){
        console.log(arg);
    }
}

printAll('A','U','T','O','C','R','Y','P','T');