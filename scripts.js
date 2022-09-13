const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

    const mathSymbol = input[0];
	const num1 = Number(input[2]);
	const num2 = Number(input[4]);
	if (mathSymbol === "+"){
	console.log(num1 + num2);
	}

reader.question("What would you like to calculate?", function(input){
	const tokens = input.split(' ');
	
	const mathSymbol = tokens[0];
	const num1 = Number(tokens[1]);
	const num2 = Number(tokens[2]);

    if (mathSymbol === "sqrt"){
        console.log(math.sprt(num1));
    }
    if (mathSymbol === '-'){
        console.log(num1 - num2);
    }
    if (mathSymbol === "/");{
        console.log(num1 / num2);
        }
    if (mathSymbol ==="*"){
        console.log(num1 * num2);
    }
});
