let displayValue;
let operand1;
let operand2;
let operator;

const display = document.querySelector('#display');

// Populate the display when clicked numbers
const numbers = document.querySelectorAll('.number');
numbers.forEach((button) => {
  button.addEventListener('click', (event) => {
    display.textContent += event.target.textContent;
    displayValue = display.textContent;
  }); 
});

// Populate the display when clicked operators
const operators = document.querySelectorAll('.operator');
operators.forEach(operator => {
  operator.addEventListener('click' , (event) => {
    display.textContent += ' ' + event.target.textContent + ' ';
    displayValue = display.textContent;
  });
});

// Make the calculator work
const calculateButton = document.querySelector('#calculate');
calculateButton.addEventListener('click', (event) => {
  parseOperation(displayValue);
  solution = operate(operand1, operand2, operator);
  display.textContent = solution;
});

// Make clear button interactive
const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
  displayValue = '';
  display.textContent = '';
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
  if (operator === 'x') return multiply(a, b);
  if (operator === '/') return divide(a , b);
}

function parseOperation(displayValue) {
  [operand1, operator, operand2] = displayValue.split(' ');
  operand1 = Number(operand1);
  operand2 = Number(operand2);
  console.log(operand1);
  console.log(operator);
  console.log(operand2);
}

