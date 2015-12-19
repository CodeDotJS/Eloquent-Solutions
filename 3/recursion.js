function exponent(base, power) {
  if (power === 0) {
    return 1;
  } else {
    return base * exponent(base, power -1);
  }
}

console.log(exponent(5,2));
