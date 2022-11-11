let firstInput = true;
let hasEvaluated = false;
const isDigitRegex = new RegExp(/(\d|\.)/);
const isOperatorRegex = new RegExp(/[\+\-\÷\×\%\/\*]/g);
const isEqualsRegex = new RegExp(/=/)
const keys = document.querySelectorAll(".key");
const digit = document.querySelectorAll(".digits");
const operator = document.querySelectorAll(".operator");
const percentage = document.getElementById("percent");
const clear = document.getElementById("clear");
const remove = document.getElementById("delete");
const equals = document.getElementById("equals");
let input = document.getElementById("input");
let history = document.getElementById("history");
let num1, num2, op;

// changes the screen input for clicking a button
keys.forEach(key => key.addEventListener('click', clicked));

// changes the screen input for pressing a key
window.addEventListener('keydown', clicked);

// data validation for the user input
function clicked(e) {
    const number = e.type === "click" ? e.target.innerHTML : e.key;
    let isDigit = isDigitRegex.test(number);
    let isOperator = isOperatorRegex.test(number);
    if (firstInput) {
        if (isDigit) {
            input.innerHTML = number;
            history.innerHTML = number;
            firstInput = false;
        } else {
            clearScreen();
        }
    } else {
        if (isDigit) {
            if (isEqualsRegex.test(history.innerHTML.slice(-1))) {
                input.innerHTML = number;
                history.innerHTML = number;
                hasEvaluated = false;
            } else if (!(isOperatorRegex.test(history.innerHTML.slice(-1)))) {
                input.innerHTML += number;
                history.innerHTML += number;
            } else {
                input.innerHTML = number;
                history.innerHTML +=number;
            }
        } else if (isOperator) {
            if (isOperatorRegex.test(history.innerHTML.slice(-1))) {
                return;
            } else if (isEqualsRegex.test(history.innerHTML.slice(-1))) {
                history.innerHTML = input.innerHTML + number;
            } else {
                history.innerHTML += number;
            }
        } 
    }
    if (number === "C" || number === "c") {
        clearScreen();
    }
    if (number === "Del" || number === "Backspace") {
        deleteInput();  
    } else if (number === "%") {
        percent();
    }
    if (number === "=" || number === "Enter") {
        e.preventDefault();
        history.innerHTML += "=";
        evaluate();
    }
};

// zero's out screen and restarts the firstInput
function clearScreen() {
    input.innerHTML = "0";
    history.innerHTML = "0";
    num1 = "";
    num2 = "";
    op = "";
    firstInput = true;
    hasEvaluated = false;
};

// deletes the last digit entered, and if it's the very last then it restarts at cleared
function deleteInput() {
  if((input.innerHTML.length === 1)) {
    clearScreen();
  } else if (isEqualsRegex.test(history.innerHTML.slice(-1))) {
    return;
  } else {
    input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length -1);
    history.innerHTML = history.innerHTML.substring(0, history.innerHTML.length -1);
  }
};

// computes whether it has before or not
function evaluate() {
    op = history.innerHTML.match(isOperatorRegex).pop();
    if(!hasEvaluated) {
        num1 = Number(parseFloat(history.innerHTML.substring(0, history.innerHTML.indexOf(op))));
        num2 = Number(parseFloat(history.innerHTML.substring(history.innerHTML.indexOf(op) +1, history.innerHTML.indexOf("="))));
    } else {
        num2 = Number(parseFloat(history.innerHTML.substring(history.innerHTML.lastIndexOf(op) +1, history.innerHTML.indexOf("="))));
    }
    input.innerHTML = Number(compute(op).toFixed(2));
    num1 = Number(parseFloat(input.innerHTML));
    hasEvaluated = true;
}

// runs the actual computing functions and returns to evaluate function
function compute(op) {
    switch (op) {
        case "×":
            return multiply();
        case "*":
            return multiply();
        case "÷":
            return divide();
        case "/":
            return divide();
        case "+":
            return add();
        case "-":
            return subtract();
    }
};

// functions for computing
function multiply() {
    return num1 * num2;
};

function divide() {
   if(num2 ===0) {
     alert("You cannot divide by zero!");
     return;  
   } else {
        return num1 / num2;
   }
};

function add() {
    return num1 + num2;
};

function subtract() {
    return num1 - num2;
};

function percent() {
    num1 = Number(parseFloat(history.innerHTML.substring(0, history.innerHTML.length -1)));
    op = "%"
    let perc = (num1 / 100).toFixed(2);
    input.innerHTML = perc;
    history.innerHTML = perc;
}