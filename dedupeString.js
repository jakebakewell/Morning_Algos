function dedupe(str) {
    let charArr = [];
    for (let i = 0; i < str.length; i++) {
        if (charArr.includes(str[i]) == false) {
            charArr.push(str[i]);
        }
        else {
            for (let j = 0; j < charArr.length; j++) {
                if (str[i] == charArr[j]) {
                    charArr.splice(j, 1);
                    break;
                }
            }
            charArr.push(str[i]);
        }
    }
    let dedupedStr = "";
    for (x in charArr) {
        dedupedStr += charArr[x];
    }
    console.log(charArr);
    console.log(dedupedStr);
}

dedupe("Snaps! Crackles! Pops!"); //"SnCrackle Pops!"

dedupe("national basketball"); //"ion sketbal"

strDedupe = (str) => {
    let strDupe = ""
    for (let i = 0; i < str.length; i++) {
        let z = 0;//tracks status of duplicate
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                z = 1;
                break
            }
        }
        if (z == 0) {
            strDupe += str[i];
        }
    }
    return strDupe
}

console.log(strDedupe("Snaps! Crackles! Pops!"));