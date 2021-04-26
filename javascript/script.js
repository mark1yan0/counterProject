'use strict';

//draw counter and set number
let h1 = document.querySelector('h1');
let div = document.createElement('div');
div.classList.add('container');
h1.after(div);
let number = 0;
div.innerHTML = ` <p id="number">${number}</p>
                  <div class="btn-container">
                    <button class="btn-plus" title="ArrowUp">+</button>
                    <button class="btn-minus" title="ArrowDown">-</button>
                  </div>
                `;

//global variables
let counter = document.getElementById('number');
let buttonPlus = document.querySelector('.btn-plus');
let buttonMinus = document.querySelector('.btn-minus');

//Functions
function increase() {
  counter.innerText = ++number;
}

function decrease() {
  counter.innerText = --number;
}

//event Listeners
//Incremento
buttonPlus.addEventListener('click', increase); //mouse

//freccetta in su
document.body.addEventListener('keydown', (event) => {
  if (event.key == 'ArrowUp') {
    increase();
    buttonPlus.style.background = 'rgba(247, 0, 0, 0.247)';
    setTimeout(() => (buttonPlus.style.background = ''), 500);
  }
});

//Decremento
buttonMinus.addEventListener('click', decrease); //mouse

//freccetta in giu
document.body.addEventListener('keydown', (event) => {
  if (event.key == 'ArrowDown') {
    decrease();
    buttonMinus.style.background = 'rgba(247, 0, 0, 0.247)';
    setTimeout(() => (buttonMinus.style.background = ''), 500);
  }
});
