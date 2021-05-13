function encodeStr(str) {
    let count = 1;
    let encStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            count++;
        }
        else {
            encStr += str[i] + count;
            count = 1;
        }
    }
    console.log(encStr);
    return encStr;
}

encodeStr("aaabbccccddefff"); // "a3b2c4d2e1f3"

function decodeStr(str) {
    let decStr = "";
    for (let i = 0; i < str.length; i += 2) {
        console.log(parseInt(str[i+1]));
        for (let j = 0; j < parseInt(str[i+1]); j++) {
            decStr += str[i];
        }
    }
    console.log(decStr);
    return decStr;
}

decodeStr("a3b2c4d2e1f3"); // "aaabbccccddefff"