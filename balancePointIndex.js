// Write a function that returns whether the given array has a balance point between indices, where one side's sum is equal to the other's. 
// Example: [1,2,3,4,10] --> True
// the balance point happens b/w indices 3 & 4 where the left side equals the right:  [1, 2, 3, 4  |  10]  ==> 1+2+3+4 = 10

function balancePoint(arr) {
    if (arr.length < 2) {
        console.log("Array cannot have balance point with less than two values.");
    }
    else {
        let sumLeft = 0;
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        for (let i = 0; i < arr.length; i++) {
            if (sumLeft === sum) {
                return true;
            }
            sumLeft += arr[i];
            sum -= arr[i];
        }
        return false;
    }
}

console.log(balancePoint([1,2,3,4,10]));

//Here, a balance point is ON an index, not BETWEEN indicies. Return the balance index where sums are equeal on either side (exclude its own value). Return -1 if none exist.
// Example 1: [-2, 5, 7, 0, 3]  --> 2 
// The balance index is 2 because on either side of that index the sums are equal:  [-2, 5,  |7| , 0, 3] --> -2+5 == 0+3
// Example 2: [9, 9]  -->  -1
// There is no balance index because there are fewer than 3 indices! As a result, we return -1 to maintain a consistent datatype

function balanceIndex(arr) {
    if (arr.length < 3) {
        return "Array must contain more than 2 values.";
    }
    let sum = 0;
    let checkSum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    for (let i = 0; i < arr.length - 1 ; i++) {
        if (checkSum === sum - (checkSum - arr[i])) {
            return i;
        }
        checkSum += arr[i];
    }
    return -1;
}

console.log(balanceIndex([-2,5,7,0,3]));