//Not Complete in Javascript

function ios(str, sub="", i=0) {
    if (i == str.length) {
        return sub;
    }
    else {
        return ios(str, sub+str[i], i+1) + ios(str, sub, i+1);
    }
}


console.log(ios("abc"));

// In Python

// def ios(str, sub= "", i=0):
//     if(i == len(str)):
//         return [sub]
//     else:
//         return ios(str, sub+str[i], i+1) + ios(str, sub, i+1)

// print(ios("abc"))