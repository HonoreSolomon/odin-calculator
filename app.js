const numbers = document.querySelectorAll('[data-number');
const operators = document.querySelectorAll(
  '[data-operator'
);
const allClear = document.querySelector('[data-all-clear');
const equal = document.querySelector('[data-equals');
const negPos = document.querySelector('[data-neg-pos');
const percent = document.querySelector('[data-percent');
const decimal = document.querySelector('[data-decimal');
const screen = document.querySelector('.screen');
const today = new Date();
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');

let firstOperand;
let secondOperand;
let operation;
let isOperator = false;

const clear = () => {
  screen.textContent = '0';
  allClear.textContent = 'AC';
};

const clearAll = () => {
  clear();
  firstOperand = null;
  secondOperand = null;
  operation = null;
};

const add = (firstOperand, secondOperand) =>
  firstOperand + secondOperand;

const subtract = (firstOperand, secondOperand) =>
  firstOperand - secondOperand;

const divide = (firstOperand, secondOperand) =>
  firstOperand / secondOperand;

const multiply = (firstOperand, secondOperand) =>
  firstOperand * secondOperand;

function compute() {
  secondOperand = parseInt(screen.textContent);
  switch (operation) {
    case 'add':
      screen.textContent = add(firstOperand, secondOperand);
      break;
    case 'subtract':
      screen.textContent = subtract(
        firstOperand,
        secondOperand
      );
      break;
    case 'divide':
      screen.textContent = divide(
        firstOperand,
        secondOperand
      );
      break;
    case 'multiply':
      screen.textContent = multiply(
        firstOperand,
        secondOperand
      );
      break;
  }
}

function appendNumber() {
  allClear.textContent = 'C';
  if (isOperator) {
    screen.textContent = this.textContent;
    isOperator = false;
    return;
  }
  screen.textContent.length < 6 &&
  screen.textContent !== '0'
    ? (screen.textContent += this.value)
    : (screen.textContent = this.value);
}

function handleOperation() {
  isOperator = true;
  operation = this.value;
  console.log(this.value);
  firstOperand = parseInt(screen.textContent);
}

function handleClear() {
  this.textContent === 'AC' ? clearAll() : clear();
}

allClear.addEventListener('click', handleClear);

for (const number of numbers) {
  number.addEventListener('click', appendNumber);
}

equal.addEventListener('click', compute);

hour.textContent = today.getHours();
minute.textContent = today.getMinutes();

// class Calculator {
//   constructor(
//     displayValue,
//     firstOperand,
//     secondOperand,
//     operator
//   ) {
//     this.firstOperand = firstOperand;
//     this.displayValue = displayValue;
//     this.secondOperand = secondOperand;
//     this.operator = operator;
//   }
//   add() {
//     return this.firstOperand + this.secondOperand;
//   }
//   subtract() {
//     return this.firstOperand - this.secondOperand;
//   }

//   divide() {
//     return this.firstOperand / this.secondOperand;
//   }

//   multiply() {
//     return this.firstOperand * this.secondOperand;
//   }

//   addNumber() {
//     screen.textContent !== '0'
//       ? (screen.textContent += e.currentTarget.textContent)
//       : (screen.textContent = e.currentTarget.textContent);
//   }

//   displayText() {}

//   clear() {
//     this.currentOperand = '';
//     this.previousOperand = '';
//     this.operator = undefined;
//   }

//   operation() {
//     switch (this.operator) {
//       case 'add':
//         this.add();
//         break;
//       case 'subtract':
//         this.subtract();
//         break;
//       case 'divide':
//         this.divide();
//         break;
//       case 'multiply':
//         this.multiply();
//         break;
//     }
//   }
//   compute() {
//     operation()
//   }
// }

operators.forEach((operator) =>
  operator.addEventListener('click', handleOperation)
);

// const operate = (operator, a , b) =>

// math functions

// const power = (num, power) => Math.pow(num, power);

// const factorial = (num) => {
//   return num > 1 ? num * factorial(num - 1) : 1;
// };

// ? (screen.textContent += e.currentTarget.textContent)
// : (screen.textContent = e.currentTarget.textContent);
