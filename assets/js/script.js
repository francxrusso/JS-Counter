// Seleziono la div
const box = document.querySelector('#box');

// Creo i bottoni +/-, reset e il contatore
const counter = document.createElement('h2');
const plusButton = document.createElement('button');
const resetButton = document.createElement('button');
const minusButton = document.createElement('button');
const minusTenButton = document.createElement('button');
const plusTenButton = document.createElement('button');


// Inizializzo il counter a 0
let count = 0

// Inserisco i placeholder negli elementi
counter.innerText = count;
plusButton.innerText = '+';
resetButton.innerText = '↺';
minusButton.innerText = '-';
minusTenButton.innerText = '-10';
plusTenButton.innerText = '+10';


// Aggiungo classi agli elementi per CSS
counter.className = 'counter';
plusButton.className = 'plus';
plusTenButton.className = 'plusTen';
minusButton.className = 'minus';
minusTenButton.className = 'minusTen';
resetButton.className = 'reset';


// Appendiamo gli elementi al div
box.appendChild(counter);
box.appendChild(minusButton);
box.appendChild(resetButton);
box.appendChild(plusButton);
box.appendChild(plusTenButton);
box.appendChild(minusTenButton);

// Funzione aumenta
function plus() {
    count++;
    counter.innerText = count;
}

// Funzione aumenta di 10
function plusTen() {
    count + 10;
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

// Funzione diminuisci di 10
function minusTen() {
    if (count === 0) { 
        return
    } else {
        count - 10;
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