const rotateString = (str, num) => {
    if (num > str.length) {
        console.log("rotate number cannot be greater than string length");
    }
    else {
        lastHalf = str.slice(str.length - num);
        firstHalf = str.slice(0, str.length - num);
        str = lastHalf + firstHalf;
    }
    return str;
}

console.log(rotateString("water jug", 5));

const isRotation = (str1, str2) => {
    for (let i = 0; i < str1.length; i++) {
        lastHalf = str1.slice(str1.length - i);
        firstHalf = str1.slice(0, str1.length - i);
        str = lastHalf + firstHalf;
        if (str2 == str) {
            console.log("True")
            return true;
        }
    }
    console.log("False");
    return false;
}

isRotation("water jug", "r jugwateasdasd");