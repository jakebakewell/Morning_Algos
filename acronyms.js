// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). Given "there's no free lunch - gotta pay yer way", return "TNFL-GPYW". Given "Live from New York, it's Saturday Night!", return "LFNYISN".

function acronyms(str) {
    let newString = ""
    if (str[0] != " ") {
        newString += str[0];
    }
    for (let i = 1; i < str.length; i++) {
        if (str[i] == " ") {
            newString += str[i + 1];
        }
    }
    let acronym = newString.toUpperCase();
    return acronym;
}
console.log(acronyms("Live from New York, it's Saturday Night!"));
console.log(acronyms("there's no free lunch - gotta pay yer way"));
console.log(acronyms("The grass is always greener on the other side"));