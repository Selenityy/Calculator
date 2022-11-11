let firstInput = true;
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

// if e.type is 'click' or if e.type is 'keydown' run the appropriate function
function userInput(e) {
    if (e.type === "click") {
        clicked(e);
    } else if (e.type === "keydown") {
        typed(e);
    } else {
        return;
    }
}

// changes the screen input for clicking a button
keys.forEach(key => key.addEventListener('click', userInput));

function clicked(e) {
    console.log(e.type);
    const number = e.target.innerHTML;
    console.log(number);
    const isDigitRegex = new RegExp(/(\d|\.)/);
    const isOperatorRegex = new RegExp(/[\+\−\÷\×\%]/);
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
            input.innerHTML = number;
            history.innerHTML +=number;
        } else if (isOperator) {
            if (isOperatorRegex.test(history.innerHTML.slice(-1))) {
                return;
            } else {
                console.log("mew")
                history.innerHTML +=number;
            }
        } 
    }
    if (number === "C") {
        clearScreen();
    }
    if (number === "Del") {
        deleteInput();
    }
    if (number === "+") {
        num1 = Number(parseFloat(history.innerHTML.substring(0, history.innerHTML.length -1)));
        op = "+";   
    } else if (number === "−") {
        num1 = Number(parseFloat(history.innerHTML.substring(0, history.innerHTML.length -1)));
        op = "−";       
    } else if (number === "×") {
        num1 = Number(parseFloat(history.innerHTML.substring(0, history.innerHTML.length -1)));
        op = "×";      
    } else if (number === "÷") {
        num1 = Number(parseFloat(history.innerHTML.substring(0, history.innerHTML.length -1)));
        op = "÷";    
    } else if (number === "%") {
        percent();
    }
    if (number === "=") {
        evaluate();
    }
    console.log("num1= " + num1);
    console.log("num2= " + num2);
    console.log("operator= " + op);
};


// changes the screen input for pressing a key
window.addEventListener('keydown', userInput);

function typed(e) {
    console.log(e.type);
    const number = e.key;
    const button = document.querySelector(`button[data-key="${e.key}"]`);
    console.log(number);
    if (!button) {
        return;
    } else if (number === "c") {
        clearScreen();
    } else if (number === "Backspace") {
        deleteInput();
    } else if(firstInput) {
        input.innerHTML = number;
        firstInput = false;
    } else {
        input.innerHTML += number;
    }
}

// zero's out screen and restarts the firstInput
function clearScreen() {
    input.innerHTML = "0";
    history.innerHTML = "0";
    firstInput = true;
};

// deletes the last digit entered, and if it's the very last then it restarts at cleared
function deleteInput() {
  if(input.innerHTML.length === 1) {
    clearScreen();
  } else {
    input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length -1);
    history.innerHTML = history.innerHTML.substring(0, history.innerHTML.length -1);
  }
};

// labels num2 after clicking equals, uses the compute function to give final input answer
function evaluate() {
    num2 = Number(parseFloat(history.innerHTML.replace(num1, "").replace(op, "").replace("=", "")));
    input.innerHTML = Number(compute(op).toFixed(2));
    history.innerHTML += "=" + input.innerHTML;
}

// runs the actual computing functions and returns to evaluate function
function compute(op) {
    switch (op) {
        case "×":
            return multiply();
        case "÷":
            return divide();
        case "+":
            return add();
        case "−":
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