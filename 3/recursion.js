function exponent(base, power) {
  if (power === 0) {
    return 1;
  } else {
    return base * exponent(base, power -1);   // checks unitl the power is 0
  }
}

console.log(exponent(5,2));


// Explanation : StackOverflow

// Look at what happens if you try to calculate 5^3:

// power(5, 3)  ... this should give us 125, let's see if it does...

function power(base, exponent) {    // base = 5, exponent = 3
  if (exponent == 0)                // nope, exponent != 0
    return 1;
  else
    return base * power(base, exponent - 1);  // return 5 * power(5, 2)
}

// ... what is power(5, 2) ? ...

function power(base, exponent) {    // base = 5, exponent = 2
  if (exponent == 0)                // nope, exponent != 0
    return 1;
  else
    return base * power(base, exponent - 1);  // return 5 * power(5, 1)
}

// ... what is power(5, 1) ? ...

function power(base, exponent) {    // base = 5, exponent = 1
  if (exponent == 0)                // nope, exponent != 0
    return 1;
  else
    return base * power(base, exponent - 1);  // return 5 * power(5, 0)
}

// ... what is power(5, 0) ? ...

function power(base, exponent) {    // base = 5, exponent = 0
  if (exponent == 0)                // yup, exponent != 0
    return 1;                       // return 1
  else
    return base * power(base, exponent - 1);
}

// ... putting that together, in reverse order as we walk back up the stack...

power(5, 0) = returns 1
power(5, 1) = 5 * power(5, 0) = 5 * 1 =  returns 5
power(5, 2) = 5 * power(5, 1) = 5 * 5 =  returns 25
power(5, 3) = 5 * power(5, 2) = 5 * 25 =  returns 125

// ... so, power(5, 3) returns 125, as it should.



