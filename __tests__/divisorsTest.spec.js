"use strict";

const divisors = require('../divisors');

describe ("Divisors function", () => {
 
  test ("Should return all divisors of number, except self and 1", () => {
    const input = 12;
    const output = [2, 3, 4, 6];
    expect (divisors(input)).toEqual(output);
  }
  )

  test ("Should return \"is prime\" if there is no either divisors except input number", () => {
    const input = 13;
    const output = "13 is prime";
    expect (divisors(input)).toEqual(output);
  }
  )
}
)