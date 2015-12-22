function countAnim(number, lable) {
	var numberString = String(number);
	while(numberString.length < 3) {
		numberString = "0" + numberString;
	}
	console.log(numberString + " " + lable);
}

function defAnim(cow, pig) {
	countAnim(cow, " Cows");
	countAnim(pig, " Pigs");
}
defAnim(4,2);
