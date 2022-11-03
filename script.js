// input options
const operators = ["+", "-", "*", "/", "%"];
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "."];
console.log(typeof(operators));
console.log(operators);
console.log(typeof(digits));
console.log(digits);

// addition function
function add(array) {
    return array.reduce((a, b) => a + b);
};
console.log(add([2,3]));

// subtraction function
function subtract(array) {
    return array.reduce((a, b) => a - b);
};
console.log(subtract([3,4]));

// multiply function
function multiply(array) {
    return array.reduce((a, b) => a * b);
};
console.log(multiply([2, 5]));

// divide function
function divide(array) {
    return array.reduce((a, b) => a / b);
};
console.log(divide([4, 2]));

// operator function
// function operate(array) {
//     return array.reduce((a, b, c) => a c b);
// };