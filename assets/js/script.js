// Seleziono la div del contenitore
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

// Setto tutte le div
const setMyNum = setUpElement("div", "num", "", container);
const setMyBut = setUpElement("div", "but", "", container);
const setMyTen = setUpElement("div", "ten", "", container);

// Seleziono le div per i bottoni
const num = document.querySelector(".num");
const but = document.querySelector(".but");
const ten = document.querySelector(".ten");

// Setto tutti i bottoni e i vari elementi del counter
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
container.addEventListener("click", function(event) {
  const target = event.target;
  
  // Se il target è il pulsante di incremento, esegui la funzione plus()
  if (target.matches('.plus')) {
    console.log(plus())
  }
  
  // Se il target è il pulsante di decremento, esegui la funzione minus()
  if (target.matches('.minus')) {
      console.log(minus())
  }
  
  // Se il target è il pulsante di incremento di 10, esegui la funzione plusTen()
  if (target.matches('.plusTen')) {
    console.log(plusTen())
  }
  
  // Se il target è il pulsante di decremento di 10, esegui la funzione minusTen()
  if (target.matches('.minusTen')) {
    console.log(minusTen())
    }
  

  // Se il target è il pulsante di reset, esegui la funzione reset()
  if (target.matches('.reset')) {
    console.log(reset())
  }
}
);
