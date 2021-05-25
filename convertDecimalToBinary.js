function decimalToBinary(num) {
    let binary = "";
    while (num != 0) {
        if (num % 2 == 0) {
            binary = 0 + binary;
        }
        if (num % 2 == 1) {
            binary = 1 + binary;
        }
        num = Math.floor(num/2);
    }
    console.log(binary);
    return binary;
}

decimalToBinary(23); // 10111
decimalToBinary(29); // 11101
decimalToBinary(115); // 1110011