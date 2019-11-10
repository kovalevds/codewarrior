"use strict";

function digitRoot(n){
    if (String(n).length == 1){
        return n;
    } else {
        n = String(n).split('').reduce((n, current) => Number(n) + Number(current), 0);
        return digitRoot(n);
    }
}

module.exports = digitRoot;