const prompt = require('prompt-sync')();
const { calc } = require('./calculator');

let operation;
let num1;
let num2;

operation = prompt('Please enter a mathematical operation:');
while (!calc[operation] && operation !== 'exit') {
    operation = prompt('Invalid operation. Please try again or type exit:');
}
if (operation !== 'exit') {
    num1 = prompt('Type your first number:');
    while (Number(num1) != num1 && num1 !== 'exit') {
        num1 = prompt('Must be a valid number. Try again:');
    }
    
    if (num1 !== 'exit') {
        num2 = prompt('Type your second number:');
        while (Number(num2) != num2 && num2 !== 'exit') {
            num2 = prompt('Must be a valid number. Try again or type exit:');
        } 
    }
}

if (operation !== 'exit' && num1 !== 'exit' && num2 !== 'exit') {
    try {
        calc[operation](num1, num2)
    } catch(e) {
        console.log(e);
    }
}