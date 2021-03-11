function reverseString(string) {
    let newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        newString = newString + string[i];
    }
    return newString;
}
console.log(reverseString("creature"));

firstString = "creature"
console.log(firstString.length);
console.log(firstString[0]);