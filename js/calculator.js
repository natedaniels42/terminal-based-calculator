const calc = {
    add(a,b) {
        const num1 = Number(a);
        const num2 = Number(b);
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
    },
    subtract(a,b) {
        const num1 = Number(a);
        const num2 = Number(b);
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
    },
    multiply(a,b) {
        const num1 = Number(a);
        const num2 = Number(b);
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
    },
    divide(a,b) {
        const num1 = Number(a);
        const num2 = Number(b);
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
    },
    remainder(a,b) {

        const num1 = Number(a);
        const num2 = Number(b);
        console.log(`${num1} % ${num2} = ${num1 % num2}`);
    },
    exponent(a,b) {
        const num1 = Number(a);
        const num2 = Number(b);
        console.log(`${num1} ** ${num2} = ${num1 ** num2}`);
    },
    root(a,b) {
        const num1 = Number(a);
        const num2 = Number(b);
        console.log(`${num1} root of ${num2} = ${num2  ** (1 / num1)}`);
    }
}

module.exports = {
    calc
};