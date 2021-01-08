let display = document.getElementById("display");
let input = document.getElementById("num-input");
let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");

let num = 0;

function addNum(e) {
    e.preventDefault();
    num += parseInt(input.value);
    display.innerText = num;
}

function subtractNum(e) {
    e.preventDefault();
    num -= parseInt(input.value);
    display.innerText = num;
}

increment.addEventListener('click', (e) => addNum(e));
decrement.addEventListener('click', (e) => subtractNum(e));
