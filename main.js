let display = document.getElementById("display");
let input = document.getElementById("num-input");
let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");

let num = 0;

function addNum(e) {
    e.preventDefault();
    num += parseInt(input.value);
    display.innerText = num;
    if (num >= 0) {
        display.style.color ="black";
    } else {
        display.style.color="red";
    }
}

function subtractNum(e) {
    e.preventDefault();
    num -= parseInt(input.value);
    display.innerText = num;
    if (num < 0) {
        display.style.color="red";
    } else {
        display.style.color="black";
    }
}

increment.addEventListener('click', (e) => addNum(e));
decrement.addEventListener('click', (e) => subtractNum(e));
