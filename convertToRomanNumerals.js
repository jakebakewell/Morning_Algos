// Given a number, convert the value to (string) roman numerals
// assume value is up to about 500

function convertToRoman(num) {
    let roman = "";
    let romanNumerals = {
        "D": 500,
        "CD": 400,
        "C": 100,
        "XC": 90,
        "L": 50,
        "XL": 40,
        "X": 10,
        "IX": 9,
        "V": 5,
        "IV": 4,
        "I": 1,
    }
    if (num < 1 || num > 500) {
        console.log("Please enter a number from 1 to 500");
    }
    else {
        for (let key in romanNumerals) {
            i = Math.floor(num / romanNumerals[key]);
            if (i >= 0) {
                for (let j = 0; j < i; j++) {
                    roman += key;
                }
            }
            num = num % romanNumerals[key];
        }
    }
    return roman;
}

// Given a (string) roman numeral, convert the value to back to a number
// assume value is up to about 500

function convertBackToNumbers(str) {
    let arr = ["D","CD","CCC","CC","C","XC","LXXX","LXX","LX","L","XL","XXX","XX","X","IX","VIII","VII","VI","V","IV","III","II","I"];

    let roman = {
        "D": 500,
        "CD": 400,
        "CCC": 300,
        "CC": 200,
        "C": 100,
        "XC": 90,
        "LXXX": 80,
        "LXX": 70,
        "LX": 60,
        "L": 50,
        "XL": 40,
        "XXX": 30,
        "XX": 20,
        "X": 10,
        "IX": 9,
        "VIII": 8,
        "VII": 7,
        "VI": 6,
        "V": 5,
        "IV": 4,
        "III": 3,
        "II": 2,
        "I": 1,
    }

    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        if (str.startsWith(arr[i])) {
            num += roman[arr[i]];
            str = str.slice(arr[i].length);
        }
    }
    return num;
}


console.log(convertToRoman(487));
console.log(convertToRoman(324));
console.log(convertToRoman(196));
console.log(convertBackToNumbers("CDLXXXVII"));
console.log(convertBackToNumbers("CCCXXIV"));
console.log(convertBackToNumbers("CXCVI"));