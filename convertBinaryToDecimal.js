function bin2dec(str){
    let dec = 0;
    let exp = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] == "1") {
            dec += Math.pow(2, exp);
        }
        exp += 1;
    }
    console.log(dec);
    return dec;
}


bin2dec("10111") //23
bin2dec("1100101"); //101