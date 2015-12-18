for (var i = 0; i <= 100; i++) {
	string = "";
	if ( i % 3 === 0 ) {
		string = string + "fizz";
	}
	if ( i % 5 === 0 ) {
		string = string + "buzz";
	}
	console.log(string || i);
};
