let firstInput = true;
const keys = document.querySelectorAll(".key");
const digit = document.querySelectorAll(".digits");
const operator = document.querySelectorAll(".operator");
const clear = document.getElementById("clear");
const remove = document.getElementById("delete");
const equals = document.getElementById("equals");
let input = document.getElementById("input");
let history = document.getElementById("history");
let num1, num2, op;

// if e.type is 'click' or if e.type is 'keydown' run the appropriate function
function userInput(e) {
    if(e.type === "click") {
        clicked(e);
    } else if(e.type === "keydown") {
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
    if(firstInput) {
        if(keys) {
            input.innerHTML = number;
            history.innerHTML = number;
            firstInput = false;
        } 
    } else {
        if(keys) {
            input.innerHTML += number;
            history.innerHTML +=number;
        } 
    }
    if(number === "C") {
        clearScreen();
    }
    if(number === "Del") {
        deleteInput();
    }
    if(number === "+") {
        num1 = input.innerHTML.substring(0, input.innerHTML.length -1);
        // input.innerHTML += "+";
        op = "+";
    }
    if(number === "=") {
        num2 = input.innerHTML.replace(num1, "").replace(op, "").replace("=", "");
        input.innerHTML = compute(num1, num2);
        history.innerHTML += input.innerHTML;
    }
    console.log("num1= " + num1);
    console.log("num2= " + num2);
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
    } else if(input.innerHTML.length >= 7) {
        charLimit();
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

// limits the inputs to 6 characters
function charLimit() {
    return input.innerHTML.substring(0,6);
    return history.innerHTML.substring(0,6);
};

// addition
function compute(a, b) {
    return parseInt(a) + parseInt(b);
};
