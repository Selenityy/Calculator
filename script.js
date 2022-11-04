// selects all keys
const keys = Array.from(document.querySelectorAll(".key"));

// changes the screen input
function clicked(e) {
    const number = e.target.innerHTML;
    document.getElementById("input").innerHTML += number; 
};

// each key when clicked on the website will run input
keys.forEach(key => key.addEventListener('click', clicked));

function pressed(e) {
    const number = e.key;
    const button = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if (!button) return;

    document.getElementById("input").innerHTML += number; 
}

// each key when pressed on the keyboard
window.addEventListener('keydown', pressed);

function add(a, b) {
    return a + b;
}