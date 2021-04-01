// Greatest Common Factor/ Greatest Common Divisor
// The highest number that divides evenly into two or more numbers.

// 12, 8
// Factors of 12 = 1, 2, 3, 4, 6, 12
// Factors of 8 = 1, 2, 4, 8
// 

// Given two whole numbers where a is greater than b, do the division a ÷ b = c with remainder R.
// Replace a with b, replace b with R and repeat the division.
// Repeat step 2 until R=0.
// When R=0, the divisor, b, in the last equation is the greatest common factor, GCF.

// 12 % 8 = 4
// 8 % 4 = 0

// Recursive algorithm for Greatest Common Factor (GCF)
// 1. Base Case
// 2. Forward Progress
// 3. Call the Function Inside the Function

function recursiveGCF(a, b) {
    if (a == 0 && b == 0) {
        return 0;
    }
    if (a == 0 && b != 0) {
        return b;
    }
    if (a != 0 && b == 0) {
        return a;
    }
    if (a >= b) {
        let R = a % b;
        if (R == 0) {
            return b;
        }
        a = b;
        b = R;
        return recursiveGCF(a, b);
    }
    else {
        return "a must be greater than b";
    }
}

console.log(recursiveGCF(12, 8));