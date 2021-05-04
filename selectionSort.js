const selectionSort = (arr)=>{
    for (var i = 0; i < arr.length; i++) {
        let maxVal = arr[0];
        let maxInd = 0;
        for (var j = 0; j < arr.length - i; j++) {
            if (arr[j] > maxVal) {
                maxVal = arr[j];
                maxInd = j;
            }
        }
        [arr[maxInd], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[maxInd]];
    }
    return arr;
}



console.log(selectionSort([6,8,4,5,3,9,1]));