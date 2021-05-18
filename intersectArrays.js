function intersect(arr1, arr2) {
    let results = [];
    if (arr1.length > arr2.length || arr1.length == arr2.length) {
        var longArr = arr1;
        var shortArr = arr2;
    }
    else {
        var longArr = arr2;
        var shortArr = arr1;
    }
    for (let i = 0; i < longArr.length; i++) {
        for (let j = 0; j < shortArr.length; j++) {
            if (longArr[i] == shortArr[j]) {
                results.push(longArr[i]);
                shortArr.splice(j, 1);
                break;
            }
        }
    }
    console.log(results);
    return results;
}

intersect([1,2,2,3,3,4,4,6], [2,3,4,4,5,6])