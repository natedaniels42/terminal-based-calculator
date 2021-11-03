const calc = {
    add(a,b) {
        const num1 = Number(a);
        const num2 = Number(b);
        console.log(num1 + num2);
    },
    subtract(a,b) {
        const num1 = Number(a);
        const num2 = Number(b);
        console.log(num1 - num2);
    },
    multiply(a,b) {
        const num1 = Number(a);
        const num2 = Number(b);
        console.log(num1 * num2);
    },
    divide(a,b) {
        const num1 = Number(a);
        const num2 = Number(b);
        console.log(num1 / num2);
    },
    remainder(a,b) {
        const num1 = Number(a);
        const num2 = Number(b);
        console.log(num1 % num2);
    },
    exponent(a,b) {
        const num1 = Number(a);
        const num2 = Number(b);
        console.log(a ** b);
    }
}

module.exports = {
    calc
};