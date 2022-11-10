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
let num1, num2, operator;

// allButtons.forEach(button => button.addEventListener("click", userInput));
window.addEventListener("keydown", keyboardInput);
digitButtons.forEach(button => button.addEventListener("click", appendNumber));
decimalButton.addEventListener("click", appendDecimal);
operatorButtons.forEach(operator => operator.addEventListener("click", appendOperator));
clearButton.addEventListener("click", wipeScreen);
decimalButton.addEventListener("click", deleteInput);
equalButton.addEventListener("click", compute);


function userInput(e) {
    if (e.type === "click") {
        clicked(e);
    } else if(e.type === "keydown") {
        keyboardInput(e);
    } else {
        return;
    }
};


function clicked() {

};


function keyboardInput() {

};


function button() {

};


function appendNumber() {

};

function appendDecimal() {

};

function appendOperator() {

};

function wipeScreen() {

};

function deleteInput(){

};

function compute() {

};