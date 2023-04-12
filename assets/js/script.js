// Seleziono le div
const but = document.querySelector('#but');
const ten = document.querySelector('#ten');
const num = document.querySelector('#num');

// Inizializzo il counter a 0
let count = 0

// funzione per la creazione degli elementi
function setUpElement(typeEl,classEl,content,parentToAppend){
    let nameElem = document.createElement(typeEl)
    nameElem.className = classEl
    nameElem.innerHTML = content
    parentToAppend.append(nameElem)
    return nameElem
}

// Creo i bottoni , il reset e il contatore
const plusButton = setUpElement('button','plus','+',but);
const minusButton = setUpElement('button','minus','-',but)
const minusTenButton = setUpElement('button','minusTen','- 10',ten)
const plusTenButton = setUpElement('button','plusTen','+ 10',ten)
const resetButton = setUpElement('button','reset','↺',but)
const counter = setUpElement('h2','counter',count,counter)

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

// Funzione aumenta di 10
function plusTen() {
    count += 10;
    counter.innerText = count;
}

// Funzione diminuisci di 10
function minusTen() {
    if (count === 0) { 
        return
    } else {
        count -= 10;
        counter.innerText = count;
    }
}

// Funzione di reset
function reset() {
    count = 0;
    counter.innerText = count;
}

// Event Listener sui bottoni
plusButton.addEventListener('click', plus);
minusButton.addEventListener('click', minus);
resetButton.addEventListener('click', reset);
plusTenButton.addEventListener('click', plusTen);
minusTenButton.addEventListener('click', minusTen);