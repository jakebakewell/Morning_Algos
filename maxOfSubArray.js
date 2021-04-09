// Given an array comprised of numbers that  is potentially very long, return the maximum sum of values from a subarray. Any consecutive sequence of indices in the array is considered a subarray. Create a function that returns the highest sum possible from these subarrays, and prints the subarray.

// [1,2,-4,3,-2,3,-1] return 4 and print [3,-2,3]

function maxOfSubarray(arr) {
    let start = 0;
    let end = 0;
    let maxSum = -Infinity;

    for(let i = 0; i < arr.length; i++){
        let runningSum = 0;
        for(let j = i; j < arr.length; j++){
            runningSum += arr[j];
            if(runningSum > maxSum){
                maxSum = runningSum;
                start = i;
                end = j;
            }
        }
    }
    subArr = arr.slice(start, end + 1);
    console.log(`Subarray with max sum found at ${start} to ${end}`)
    console.log(subArr);
    return maxSum;
}

console.log(maxOfSubarray([-1,2,-4,3,-2,3,-1]));