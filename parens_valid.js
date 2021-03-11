// Parens Valid
function parensValid(str) {
    let closeParenCounter = 0;
    let openParenCounter = 0;
    for (let i = 0; i < str.length; i++) {
        if (closeParenCounter > openParenCounter) {
            return false;
        }
        else if (str[i] == "(") {
            openParenCounter++;
        }
        else if (str[i] == ")") {
            closeParenCounter++;
        }
    }
    if (closeParenCounter == openParenCounter) {
        return true;
    }
    else {
        return false;
    }
}
console.log(parensValid("y(3(p)p(3)r)s"));
console.log(parensValid("n(0(p)3"));
console.log(parensValid("n)0(t(0)k"));