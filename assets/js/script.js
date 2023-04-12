// Seleziono le div
const container = document.querySelector("#container");

// Inizializzo il counter a 0
let count = 0;

// funzione per la creazione degli elementi
function setUpElement(typeElement, classElement, content, parentToAppend) {
  let myElement = document.createElement(typeElement);
  myElement.className = classElement;
  myElement.innerHTML = content;
  parentToAppend.append(myElement);
  return myElement;
}

// Setto tutti gli elementi

const containerNum = setUpElement("div", "num",'', container); //div contenente il counter
const containerBut = setUpElement("div", "but", '', container); //div contenente i bottoni superiori
const containerTen = setUpElement("div", "ten", '', container); //div contenente i bottoni inferiori

const counter = setUpElement("h2", "counter", count, num);
const plusButton = setUpElement("button", "plus", "+", but);
const resetButton = setUpElement("button", "reset", "↺", but);
const minusButton = setUpElement("button", "minus", "-", but);
const minusTenButton = setUpElement("button", "minusTen", "- 10", ten);
const plusTenButton = setUpElement("button", "plusTen", "+ 10", ten);

// Funzione aumenta
function plus() {
  count++;
  counter.innerText = count;
}

// Funzione diminuisci
function minus() {
  if (count === 0) {
    return;
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
    return;
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
