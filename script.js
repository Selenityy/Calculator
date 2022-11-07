let firstInput = true;
const keys = Array.from(document.querySelectorAll(".key"));
const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operator = ["+", "-", "×", "÷", "%"];
const clear = "c";
const remove = "Del";
const equals = "=";
let input = document.getElementById("input");
let num1, num2, op;



// changes the screen input for clicking a button
function clicked(e) {
    const number = e.target.innerHTML;
    console.log(number);
    if(firstInput) {
        if(digit.includes(number)) {
            input.innerHTML = number;
            firstInput = false;
        } 
    } else {
        if((digit.includes(number))) {
            input.innerHTML += number;
        } 
    }
    if(number === clear.toUpperCase()) {
        input.innerHTML = "0";
    }
    if(number === remove) {
        input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length -1)
    }
    if(number === "+") {
        num1 = input.innerHTML;
        input.innerHTML += "+";
        op = "+";
    }
    if(number === "=") {
        num2 = input.innerHTML.replace(num1, "").replace(op, "");
        input.innerHTML = compute(num1, num2);
    }
    console.log("num1= " + num1);
    console.log("num2= " + num2);
};
// each key when clicked on the website will run input
keys.forEach(key => key.addEventListener('click', clicked));


function compute(a, b) {
    return parseInt(a) + parseInt(b);
};

// changes the screen input for pressing a key
// function pressed(e) {
//     const number = e.key;
//     const button = document.querySelector(`button[data-key="${e.key}"]`);
//     // input = document.getElementById("input");
//     console.log(number)
//     if (!button) {
//         return;
//     } else if (number === "c") {
//         input.innerHTML = "0";
//         firstInput = true;
//     } else if (number === "Backspace") {
//        input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length -1);
//     } else {
//         input.innerHTML += number;
//     }
// }
// // each key when pressed on the keyboard will run input
// window.addEventListener('keydown', pressed);

// function add(a, b) {
//     return a + b;
// }

