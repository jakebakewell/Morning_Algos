function numberToHexadecimal(num) {
    let result = num.toString(16);
    console.log(result);
    return result;
}

numberToHexadecimal(235); // eb
numberToHexadecimal(23); // 17

function dec2hex(num){
    let hexChars = "0123456789ABCDEF"
    let remainders = []
    let output = ""
    while(num>0){
        //find the remainder of that number/16 
        let remainder = num%16
        remainders.push(remainder)
        num = Math.floor(num/16)
    }
    console.log(remainders)
    //go backwards through the array of remainders and match each value with its hexadecimal equivalent
    for(let i = remainders.length-1; i>=0; i--){
        console.log(hexChars[remainders[i]])
        output+= hexChars[remainders[i]]
    }

    console.log(output)
}


dec2hex(23) //"17"
dec2hex(592) //250
dec2hex(635) //27B