// Seleziono la div
const box = document.querySelector('#box');

// Creo i bottoni +/-, reset e il contatore
const counter = document.createElement('h2');
const plusButton = document.createElement('button');
const resetButton = document.createElement('button');
const minusButton = document.createElement('button');


// Inizializzo il counter a 0
let count = 0

// Inserisco i placeholder negli elementi
counter.innerText = count;
plusButton.innerText = '+';
resetButton.innerText = '↺';
minusButton.innerText = '-';


// Aggiungo classi agli elementi per CSS
counter.className = 'counter';
plusButton.className = 'plus';
minusButton.className = 'minus';
resetButton.className = 'reset';

// Appendiamo gli elementi al div
box.appendChild(counter);
box.appendChild(minusButton);
box.appendChild(resetButton);
box.appendChild(plusButton);

// Funzione aumenta
function plus() {
    count++;
    counter.innerText = count;
}

// Funzione diminuisci
function minus() {
    if (count === 0) { 
        return
    } else {
        count--;
        counter.innerText = count;
    }
}

// extra
function reset() {
    count = 0;
    counter.innerText = count;
}

// Event Listener sui bottoni
plusButton.addEventListener('click', plus);
minusButton.addEventListener('click', minus);
resetButton.addEventListener('click', reset);