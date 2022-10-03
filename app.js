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

let isMultiOperation = false;
let firstOperand;
let secondOperand;
let operation;
let isOperator = false;
let isDecimal = false;

const percentage = () =>
  (screen.textContent =
    parseFloat(screen.textContent) / 100);

const neg = () =>
  (screen.textContent =
    parseFloat(screen.textContent) * -1);

const calculation = (
  firstOperand,
  secondOperand,
  operation
) => {
  isDecimal = false;
  switch (operation) {
    case 'add':
      screen.textContent =
        Math.round(
          (add(firstOperand, secondOperand) +
            Number.EPSILON) *
            10000
        ) / 10000;
      break;
    case 'subtract':
      screen.textContent =
        Math.round(
          (subtract(firstOperand, secondOperand) +
            Number.EPSILON) *
            10000
        ) / 10000;
      break;
    case 'divide':
      screen.textContent =
        Math.round(
          (divide(firstOperand, secondOperand) +
            Number.EPSILON) *
            10000
        ) / 10000;
      break;
    case 'multiply':
      screen.textContent =
        Math.round(
          (multiply(firstOperand, secondOperand) +
            Number.EPSILON) *
            10000
        ) / 10000;
      break;
  }
};

const clear = () => {
  screen.textContent = '0';
  allClear.textContent = 'AC';
  isDecimal = false;
};

const clearAll = () => {
  clear();
  firstOperand = null;
  secondOperand = null;
  operation = null;
  isMultiOperation = false;
  isDecimal;
};

const add = (firstOperand, secondOperand) =>
  firstOperand + secondOperand;

const subtract = (firstOperand, secondOperand) =>
  firstOperand - secondOperand;

const divide = (firstOperand, secondOperand) =>
  secondOperand !== 0
    ? firstOperand / secondOperand
    : alert(
        "did you go to elementary school? you can't do that"
      );

const multiply = (firstOperand, secondOperand) =>
  firstOperand * secondOperand;

function appendDecimal() {
  if (isDecimal) return;
  screen.textContent += this.value;
  isDecimal = true;
}

function compute() {
  secondOperand = parseInt(screen.textContent);
  calculation(firstOperand, secondOperand, operation);
  // switch (operation) {
  //   case 'add':
  //     screen.textContent = add(firstOperand, secondOperand);
  //     break;
  //   case 'subtract':
  //     screen.textContent = subtract(
  //       firstOperand,
  //       secondOperand
  //     );
  //     break;
  //   case 'divide':
  //     screen.textContent = divide(
  //       firstOperand,
  //       secondOperand
  //     );
  //     break;
  //   case 'multiply':
  //     screen.textContent = multiply(
  //       firstOperand,
  //       secondOperand
  //     );
  //     break;
  // }
}

function appendNumber() {
  allClear.textContent = 'C';
  if (isOperator) {
    screen.textContent = this.value;
    isOperator = false;
    return;
  }
  screen.textContent.length < 6 &&
  screen.textContent !== '0'
    ? (screen.textContent += this.value)
    : (screen.textContent = this.value);
}

function handleOperation() {
  if (isMultiOperation) compute();
  isOperator = true;
  operation = this.value;
  firstOperand = parseInt(screen.textContent);
  isMultiOperation = true;
}

function handleClear() {
  this.textContent === 'AC' ? clearAll() : clear();
}

for (const number of numbers) {
  number.addEventListener('click', appendNumber);
}

function dltAll() {
  this.textContent = 0;
}

function deleteNumber() {
  if (this.textContent.length <= 1) {
    this.textContent = 0;
    return;
  }
  this.textContent = this.textContent.slice(0, -1);
}

allClear.addEventListener('click', handleClear);

screen.addEventListener('click', deleteNumber);
screen.addEventListener('dblclick', dltAll);

equal.addEventListener('click', compute);

decimal.addEventListener('click', appendDecimal);

hour.textContent = today.getHours();
minute.textContent = today.getMinutes();

negPos.addEventListener('click', neg);

percent.addEventListener('click', percentage);
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
