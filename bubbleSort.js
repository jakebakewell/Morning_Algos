function bubbleSort(array) {
    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < array.length - j; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
    }
    return array;
}

console.log(bubbleSort([4,7,2,3,1,9,8]));