function isPalindrome(string) {
    let reverseString = "";
    let noSpaceString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        if (string[i] == " " || string[i] == ",") {
            console.log("No spaces or commas");
        }
        else{
        reverseString = reverseString + string[i];
        }
    }
    for (let i = 0; i < string.length; i++) {
        if (string[i] == " " || string[i] == ",") {
            console.log("No spaces or commas");
        }
        else{
            noSpaceString = noSpaceString + string[i]
        }
    }
    let a = reverseString.toLowerCase();
    let b = noSpaceString.toLowerCase();
    console.log(a);
    console.log(b);
    if (a == b) {
        return true
    }
    else {
        return false
    }
}
console.log(isPalindrome("Able was I, ere I saw Elba"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("bonkers"));