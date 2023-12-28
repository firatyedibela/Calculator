let operand1;
let operand2;
let operator;

const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator')

// Populate the display when clicked numbers
numbers.forEach((button) => {
  button.addEventListener('click', (event) => {
    display.textContent += event.target.textContent;
  }); 
});

// Populate the display when clicked operators
operators.forEach(operator => {
  operator.addEventListener('click' , (event) => {
    display.textContent += ' ' + event.target.textContent + ' ';
  });
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
} 

function divide(a, b) {
  return a / b;
}

function operate(a, b, operator) {
  if (operator === '+') return add(a, b);
  if (operator === '-') return subtract(a, b);
  if (operator === '*') return multiply(a, b);
  if (operator === '/') return divide(a , b);
}
