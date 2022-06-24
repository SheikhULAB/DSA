function fib(n) {
    if(n >=3) {
        return fib(n-1) + fib(n-2);
    }
    else {
        return 1;
    }
}

let fibNum = prompt("enter a value");
let fibValue = fib(fibNum);
console.log(fibValue);