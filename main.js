let add = document.getElementById('increment');
let minus = document.getElementById('decrement');
let int = document.getElementById('number');
let integer = 0;


add.addEventListener('click', function() {
    integer += 1;
    int.innerHTML = integer;
});

minus.addEventListener('click', function() {
    integer -= 1;
    int.innerHTML = integer;
});

if (integer < 0) {
    int.style.color = "red";
} else {
    int.style.color = "green";
}
