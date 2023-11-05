'use strict'; 
const decrementButton = document.querySelector(`button[data-action="decrement"]`); 
const incrementButton = document.querySelector(`button[data-action="increment"]`); 
const valueElement = document.querySelector(`#value`); 

let counterValue = 0;  

const decrement = () => {
    counterValue -= 1;
    value.innerHTML = counterValue
}; 
 
const increment = () => {
    counterValue += 1;
    value.innerHTML = counterValue;
}; 
 
decrementButton.addEventListener(`click`, decrement) 
incrementButton.addEventListener(`click`, increment)