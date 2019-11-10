"use strict";

const digitroot = require('../digitroot');

describe ("Digit root function", () => {
 
  test ("Should return sum of all divisors of digit", () => {
    const input = 12;
    const output = 3
    expect (digitroot(input)).toEqual(output);
  }
  )

  test ("If more than 2 digits should return sum of all divisors of digit", () => {
    const input = 12345;
    const output = 6
    expect (digitroot(input)).toEqual(output);
  }
  )

}
)