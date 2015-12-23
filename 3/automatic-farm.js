function defAnim(number, count) {
  var numberString = String(number);
  while(numberString.length < count) {
    numberString = "0" + numberString;
  }
  return numberString;
}

function countAnim(cow, deer) {
  console.log(defAnim(cow, 5) + " Cows");
  console.log(defAnim(deer,5) + " Deer");
}
countAnim(2, 3);
