const strtoWordArry = (str)=>{
    let wordArray = [];
    let word = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            word += str[i];
        }
        else {
            if (word.length > 0) {
                wordArray.push(word);
                word = "";
            }
        }
        if (i == str.length-1 && word.length > 0) {
            wordArray.push(word);
            word = "";
        }
    }
    return wordArray;
}




console.log(strtoWordArry("   Hello how is    it going?   ")); // ["Hello", "how", "is", "it", "going?"]
console.log(strtoWordArry("Ramen is delicious"));