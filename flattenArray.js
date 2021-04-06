// Flatten a given array, eliminating nested and empty arrays. Do not alter the array; return a new one retaining the order. 
// Example #1) [1, [2,3], 4, []] ==> return a new array [1,2,3,4]

// Slightly harder: Work in-place in the given array (do not create a new array). Alter the order if needed! 
// Example #2) [1, [2,3], 4, []] ==> return same array but adjusted [1,2,3,4]

// **Assume that all elements are either numbers or arrays


// Only works for 1 level of nested arrays
function flatten(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "object") {
            otherArr = arr[i];
            for (let j = 0; j < otherArr.length; j++) {
                newArr.push(otherArr[j]);
            }
        }
        else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(flatten([1, [2,3], 4, []]));

// Same function using built-in method that works for all levels of nested arrays.
function flattenTwo(arr) {
    arr = arr.flat(Infinity);
    return arr;
}
console.log(flattenTwo([1, [2,3], 4, []]));