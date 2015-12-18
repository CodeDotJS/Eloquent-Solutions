var size = 8;

var line = '';

for (var i = 0; i < size/2; i++) { // size/2 because we have to print only four "#"
	line = line + "# "; // added space after "# "
};

for (var i = 0; i < size; i++) { // for adding rows
	if ( i % 2 === 0 ) { // if the line is even, we'll add space
		console.log(' ' + line); // space added 
	} else {
		console.log(line);
	}
};
