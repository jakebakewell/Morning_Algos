let words = [
    ["quick", "lazy"],
    ["brown", "red", "grey"],
    ["fox", "dog"]
]


// ["quick brown fox", "quick brown dog", "quick red fox" etc;]



function allCombs(words){
    let result = [];
    function helper(comb, i) {
        if (i == words.length) {
            result.push(comb);
        }
        else {
            for (let j = 0; j < words[i].length; j++) {
                helper(comb + words[i][j] + " ", i + 1);
            }
        }
    }
    helper("", 0);
    console.log(result);
    return result;
}


allCombs(words) //["quick brown fox", "quick brown dog", "quick red fox" etc;]