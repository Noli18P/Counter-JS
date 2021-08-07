const increase = document.getElementById('inc');
let numChange = 0;
const numHTML = document.getElementById('num');

const reset = document.getElementById('reset');
reset.addEventListener('click', function() {
    numChange = 0;
    numHTML.innerHTML = 0;
    numHTML.style.color = 'black';
});

increase.addEventListener('click', function() {
    numChange = numChange + 1;
    numHTML.innerHTML = numChange;
    if (numChange > 0) {
        numHTML.style.color = 'green';
    } 
    if (numChange === 0) {
        numHTML.style.color = 'black';
    }
});

const decrease = document.getElementById("dec");
decrease.addEventListener('click', function() {
    numChange = numChange - 1;
    numHTML.innerHTML = numChange;
    if (numChange < 0) {
        numHTML.style.color = "red";
    }
    if (numChange === 0) {
        numHTML.style.color = 'black';
    }
});