
function power(base, exponent) { // making function power with two paramaters

	result = 1; // initial value
	
	for (var i = 0; i < exponent; i++) { // loop continues until it reaches it's destination
	
		result = result * base; 
	}
	return result;
};

console.log(power(2,3)); 
