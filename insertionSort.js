function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        if (arr[j] < arr[j - 1]) {
            while (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
                j--;
            }
        }
    }
    return arr;
}


console.log(insertionSort([6,8,3,2,4,1,9]));