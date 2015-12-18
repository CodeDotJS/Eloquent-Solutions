function wrapValue(n) {
	var localVar = n;
	return function() {
		return localVar;
	};
}

var wrapOne = wrapValue(1);
var wrapTwo = wrapValue(2);

console.log(wrapOne());
console.log(wrapTwo());
