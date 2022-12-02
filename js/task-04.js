const btnDecr = document.querySelector('button[data-action ="decrement"]');
const btnIncr = document.querySelector('button[data-action ="increment"]');
const value = document.querySelector('#value');
let counterValue = 0;
const counter = function(){
    const action = this.dataset.action;
    if (action === "increment"){
        counterValue = Number(value.textContent) + 1;
    } else {
    counterValue = value.textContent > 0 ? value.textContent - 1 : 0;
    }
value.textContent = counterValue;
}
btnDecr.addEventListener('click', counter);
btnIncr.addEventListener('click', counter);