const combine = (arr1, arr2) => {
    var result = [];
    var i = 0;
    var j = 0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]> arr2[j]){
            result.push(arr2[j])
            j++
        }else{
            result.push(arr1[i])
            i++
        }
    }
    while(i<arr1.length){
        result.push(arr1[i])
        i++
    }
    while(j<arr2.length){
        result.push(arr2[j])
        j++
    }
    console.log(result);
    return result;
}

const mergeSort = (arr) => {
    const halfLen = Math.floor(arr.length / 2);
    if (arr.length < 2) {
        return arr;
    }
    const leftSide = arr.splice(0, halfLen);
    return combine(mergeSort(leftSide), mergeSort(arr));
}

console.log(mergeSort([8,4,1,3,5,6,9,7]))