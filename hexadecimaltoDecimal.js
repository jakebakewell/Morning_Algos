function decimalToHexadecimal(str) {
    let result = parseInt(str, 16);
    console.log(result);
    return result;
}

decimalToHexadecimal("17"); //23
decimalToHexadecimal("250"); //592
decimalToHexadecimal("27B"); //635
decimalToHexadecimal("FA8") //4008

function decToHexadec(str) {
    let sum = 0;
    let holder = 0;
    let exp = 0;
    for (var i = str.length - 1; i >= 0; i--) {
        if (parseInt(str[i]) < 10) {
            holder = str[i];
        }
        else if (str[i] == "A" || str[i] == "B" || str[i] == "C" || str[i] == "D" || str[i] == "E" || str[i] == "F") {
            if (str[i] == "A") {
                holder = 10;
            }
            else if (str[i] == "B") {
                holder = 11;
            }
            else if (str[i] == "C") {
                holder = 12;
            }
            else if (str[i] == "D") {
                holder = 13;
            }
            else if (str[i] == "E") {
                holder = 14;
            }
            else if (str[i] == "F") {
                holder = 15;
            }
        }
        holder = holder * Math.pow(16, exp);
        sum += holder;
        exp++;
    }
    console.log(sum);
    return sum;
}

console.log("***************");
decToHexadec("17"); //23
decToHexadec("250"); //592
decToHexadec("27B"); //635