function unionArrays(arr1, arr2) {
    let union = [];
    let idx1 = 0;
    let idx2 = 0;
    while (idx1 < arr1.length && idx2 < arr2.length) {
        if (arr1[idx1] < arr2[idx2]) {
            union.push(arr1[idx1]);
            idx1++;
        }
        else if (arr1[idx1] == arr2[idx2]) {
            union.push(arr1[idx1]);
            idx1++;
            idx2++;
        }
        else {
            union.push(arr2[idx2]);
            idx2++;
        }
    }
    if (idx1 < arr1.length) {
        while (idx1 < arr1.length) {
            union.push(arr1[idx1]);
            idx1++;
        }
    }
    else {
        while (idx2 < arr2.length) {
            union.push(arr2[idx2]);
            idx2++;
        }
    }
    console.log(union);
}

unionArrays([5,5,6,7], [0,2,2,6,6]);
