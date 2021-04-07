// Remove the duplicates from a given array. Do not alter the original array, return a new one! Keep the results 'stable' (retain the original order);

// Example: [1,2,1,3,4,4,5] ==> [1,2,3,4,5]

// Slightly more difficult! Work 'in-place' in the given array. For this one you can mess with the order if you need too!

function removeDuplicates(arr) {
    let newArr = [];
    let set = new Set([]);
    for (let i =0; i < arr.length; i++) {
        set.add(arr[i]);
    }
    set.forEach((val) => newArr.push(val));
    return newArr;
}

console.log(removeDuplicates([1,2,1,3,4,4,5]));