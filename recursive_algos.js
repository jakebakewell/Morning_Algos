// Sigma as a linear function
// Write a function that takes in an integer and returns the sum of all previous integers.

// sigma(5)
// 1+2+3+4+5 = 15

function sigma(num) {
    let sum = 0
    for(let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

// console.log(sigma(5))

// 1. Base Case
// 2. Forward Progress
// 3. Calling Back Into Itself

function recursiveSigma(num) {
    // base case
    if (num < 1) {
        return 0;
    }
    return num + recursiveSigma(num - 1);
}

// console.log(recursiveSigma(5))

function factorial(num) {
    let product = 1;
    for (let i = 1; i <= num; i++) {
        product = product * i;
    }
    return product;
}

function recFactorial(num) {
    if (num < 1) {
        return 1;
    }
    return num * recFactorial(num - 1);
}

// console.log(recFactorial(5));

function fib(num) {
    let arr = [0, 1];
    for (let i = 2; i <= num; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr[num];
}

console.log(fib(5));

function recFib(num) {
    if (num < 2){
        return num;
    }
    return recFib(num-2) + recFib(num-1);
}

console.log(recFib(5));