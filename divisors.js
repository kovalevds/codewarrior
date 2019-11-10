"use strict";

let divisors = n => {
    let divisors = [];
    for (let i=2; i<n; i++){
        if (Number.isInteger(n/i)){
        divisors.push(i);
        }
    }
    if (divisors.length == 0){
        return n + " is prime";
    } else {
    return divisors;
    }
}

module.exports = divisors;