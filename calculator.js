const allButtons = document.querySelectorAll(".key");
const digitButtons = document.querySelectorAll(".digits");
const decimalButton = document.getAnimations("decimal");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const equalButton = document.getElementById("equals");
let inputScreen = document.getElementById("input");
let historyScreen = document.getElementById("history");
let firstInput = true;
let num1, num2, op;

window.addEventListener("keydown", keyboardInput);
digitButtons.forEach(button => button.addEventListener("click", appendNumber));
decimalButton.addEventListener("click", appendDecimal);
operatorButtons.forEach(operator => operator.addEventListener("click", appendOperator));
clearButton.addEventListener("click", wipeScreen);
decimalButton.addEventListener("click", deleteInput);
equalButton.addEventListener("click", computeInput);

function keyboardInput() {

};


function appendNumber(e) {
    console.log(e.type);
    const number = e.target.innerHTML;
    console.log(number);
    checkIfFirstInput(number);
    if (firstInput) {
        inputScreen.innerHTML += number;
        historyScreen.innerHTML += number;
    }

};

function appendDecimal() {

};

function appendOperator() {

};

function wipeScreen() {
    inputScreen.innerHTML = "0";
    historyScreen.innerHTML = "0";
    firstInput = true;
};

function deleteInput(){
    if(inputScreen.innerHTML.length === 1) {
        wipeScreen();
      } else {
        inputScreen.innerHTML = inputScreen.innerHTML.substring(0, inputScreen.innerHTML.length -1);
        historyScreen.innerHTML = historyScreen.innerHTML.substring(0, historyScreen.innerHTML.length -1);
      }
};

function charLimit() {
    inputScreen.innerHTML.substring(0,6);
    historyScreen.innerHTML.substring(0,6);
};

function computeInput(operator) {
    switch (operator) {
        case "×":
            multiply();
            break;
        case "÷":
            divide();
            break;
        case "+":
            add();
            break;
        case "-":
            subtract();
            break;
    }
};

function checkIfFirstInput(button) {
    if (firstInput) {
        if (digitButtons || decimalButton) {
            inputScreen.innerHTML = number;
            historyScreen.innerHTML = number;
            firstInput = false;
        } else if (allButtons) {
            wipeScreen();
        } else {
            return;
        }
    } else {
        return;
        // if (allButtons) {
        //     inputScreen.innerHTML += number;
        //     historyScreen.innerHTML += number;
        // }
    }
};

function multiply() {
    return num1 * num2;
};

function divide() {
    return num1 / num2;
};

function add() {
    return num1 + num2;
};

function subtract() {
    return num1 - num2;
};