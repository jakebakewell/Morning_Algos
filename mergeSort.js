const combine = (arr1, arr2)=>{
    if (arr1.length > arr2.length) {
        var longLen = arr1.length;
        var shortLen = arr2.length;
        var len = shortLen + longLen;
        var longArr = arr1;
    }
    else {
        var longLen = arr2.length;
        var shortLen = arr1.length;
        var len = shortLen + longLen;
        var longArr = arr2;
    }
    let leftArrInc = 0;
    let rightArrInc = 0;
    let combinedArr = [];
    for (let i = 0; i < len; i++) {
        if (arr1[leftArrInc] > arr2[rightArrInc]) {
            combinedArr.push(arr2[rightArrInc]);
            rightArrInc += 1;
        }
        else if (arr1[leftArrInc] < arr2[rightArrInc]) {
            combinedArr.push(arr1[leftArrInc]);
            leftArrInc += 1;
        }
        else if (i >= shortLen) {
            combinedArr.push(longArr[rightArrInc]);
            rightArrInc += 1;
        }
    }
    return combinedArr;
}



console.log(combine([4,6,7], [1,3,6,9]));