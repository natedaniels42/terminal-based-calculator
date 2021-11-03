const prompt = require('prompt-sync')();
const { calc } = require('./calculator');

let operation = prompt('Please enter a mathematical operation:');
while (!calc[operation]) {
    operation = prompt('Invalid operation. Please try again:');
}

let num1 = prompt('Type your first number:');
while (Number(num1) != num1) {
    num1 = prompt('Must be a valid number. Try again:');
}

let num2 = prompt('Type your second number');
while (Number(num2) != num2) {
    num2 = propmt('Must be a valid number. Try again:');
} 

try {
    calc[operation](num1, num2)
} catch(e) {
    console.log(e);
}