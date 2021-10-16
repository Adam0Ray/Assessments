const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Welcome to the password validator tool. Please enter your password.", function(input){
    password = input;
	

	if (input.length >= 10){
		console.log("Success");
	} else {
        console.log("Failure");
	}
	
	reader.close()

});