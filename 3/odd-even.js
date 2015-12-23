function isEven(number) {
  if (number % 2 === 0) {
    return 1 + " : True";
  } else if (number < 0) {
    return "Non Positive Integer";
  } else {
    return -1 + " : False";
  }
}
console.log(isEven(10));
