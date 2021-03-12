function generateCoinChange(cents) {
    let pocket_change = {};
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;
    for (let i = 0; i < cents; i++) {
        if (cents >= 25) {
            quarters += 1;
            cents -= 25;
        }
        else if (cents >= 10) {
            dimes += 1;
            cents -= 10;
        }
        else if (cents >= 5) {
            nickels += 1;
            cents -= 5
        }
    pennies = cents
    pocket_change.quarters = quarters;
    pocket_change.dimes = dimes;
    pocket_change.nickels = nickels;
    pocket_change.pennies = pennies;
    }
    return pocket_change;
}
console.log(generateCoinChange(94));