const operation = {
  operand1: null,
  operand2: null,
  operator: null,
}

const display = document.querySelector('#display');
let displayValue = '0';
updateDisplay(displayValue);

// Populate the display when clicked numbers
const numbers = document.querySelectorAll('.number');
numbers.forEach((button) => {
  button.addEventListener('click', (event) => {
    if (displayValue === '0') {
      displayValue = event.target.textContent;
      updateDisplay(displayValue);
    }
    else {
      displayValue += event.target.textContent;
      updateDisplay(displayValue);
    }
  }); 
});

// If an operator clicked earlier, do the calculation, update the operator to be the new clicked button. So one pair of numbers gets evaluated at a time
const operators = document.querySelectorAll('.operator');
operators.forEach(operator => {
  operator.addEventListener('click', (event) => { 
    if (operation.operand1 === null) {
      operation.operand1 = Number(displayValue);       
    }
    else if (operation.operator) { 
      operation.operand2 = Number(displayValue);
      let result = operate(operation.operand1, operation.operand2, operation.operator);
      displayValue = result;
      operation.operand1 = displayValue;
      updateDisplay(displayValue);
    }
    operation.operator = event.target.textContent;   
    displayValue = '';
  });
});

// Make clear button interactive
const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
  displayValue = '0';
  resetOperation();
  updateDisplay(displayValue);
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

function updateDisplay(value) {
  display.textContent = value;
}

function resetOperation() {
  for (let key in operation) {
    operation[key] = null;
  }
}

