// Matrix Search

// Jenny digs image and wants to make a JavaScript imaging library like PIL for python. She is given 2 different two-dimensional arrays, containing integers between 0 and 65535. Each two dimensional array represents a grey-scale image, where each integer value is a pixel. The second image might be somewhere inside the larger one. Return whether it is.
// Given Array: [ [12, 34, 45, 56],    And Array: [ [67, 78],      return: true
//                [98, 87, 76, 65],                 [43, 32] ];   
//                [56, 67, 78, 89],
//                [54, 43, 32, 21] ];

function matrixSearch(arr, searchArr) {
    let checkArr = [];
    let checkArr2 = [];
    let checkArr3 = [];
    let searchCount = 0;
    for (let i =0; i < arr.length; i++) {
        checkArr.push(arr[i][0]);
        checkArr.push(arr[i][1]);
        checkArr2.push(arr[i][1]);
        checkArr2.push(arr[i][2]);
        checkArr3.push(arr[i][2]);
        checkArr3.push(arr[i][3]);
        if (checkArr[0] == searchArr[0][0] && checkArr[1] == searchArr[0][1]) {
            searchCount += 1;
        }
        if (checkArr2[0] == searchArr[0][0] && checkArr2[1] == searchArr[0][1]) {
            searchCount += 1;
        }
        if (checkArr2[0] == searchArr[0][0] && checkArr2[1] == searchArr[0][1]) {
            searchCount += 1;
        }
        if (checkArr[0] == searchArr[1][0] && checkArr[1] == searchArr[1][1]) {
            searchCount += 1;
        }
        if (checkArr2[0] == searchArr[1][0] && checkArr2[1] == searchArr[1][1]) {
            searchCount += 1;
        }
        if (checkArr3[0] == searchArr[1][0] && checkArr3[1] == searchArr[1][1]) {
            searchCount += 1;
        }
        if (searchCount == 2) {
            return true;
        }
        checkArr = [];
        checkArr2 = [];
        checkArr3 = [];
    }
    return false;
}
x = [[12, 34, 45, 56],[98, 87, 76, 65],[56, 67, 78, 89],[54, 43, 32, 21]];
y = [[78,89],[32,21]];
console.log(matrixSearch(x, y));