function binarySearch(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end)/2);
        if (arr[middle] === num) {
            return console.log(`Non-recursive **** ${num} occurs at array index ${middle}`);
        }
        if (num > arr[middle]) {
            start = middle + 1;
        }
        if (num < arr[middle]) {
            end = middle - 1;
        }
    }
    console.log("Non-recursive **** Target value not found in target array");
}

array = [1,3,4,7,8,9,13,15,18,22,26,28,33,37,40];
binarySearch(array, 8);

function recBinarySearch(arr, num, start, end) {
    array = arr;
    target = num;
    let middle = Math.floor((start + end)/2);
    if (num === arr[middle]) {
        return console.log(`Recursive **** ${num} occurs at array index ${middle}`);
    }
    if (num > arr[middle]) {
        end = end
        newStart = middle + 1;
        return recBinarySearch(array, target, newStart, end);
    }
    if (num < arr[middle]) {
        start = start
        newEnd = middle - 1;
        return recBinarySearch(array, target, start, newEnd);
    }
    if (start === end) {
        console.log("Recursive **** Target value was not found in target array");
    }
}

otherArray = [1,3,4,7,8,9,13,15,18,22,26,28,33,37,40];
recBinarySearch(otherArray, 7, 0, otherArray.length - 1);