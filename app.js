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

for (const number of numbers) {
  number.addEventListener('click', (e) =>
    screen.textContent !== '0'
      ? (screen.textContent += e.currentTarget.textContent)
      : (screen.textContent = e.currentTarget.textContent)
  );
}

class Calculator {
  constructor(
    displayValue,
    firstOperand,
    secondOperand,
    operator
  ) {
    this.firstOperand = firstOperand;
    this.displayValue = displayValue;
    this.secondOperand = secondOperand;
    this.operator = operator;
  }
  add() {
    return this.firstOperand + this.secondOperand;
  }
  subtract() {
    return this.firstOperand - this.secondOperand;
  }

  divide() {
    return this.firstOperand / this.secondOperand;
  }

  multiply() {
    return this.firstOperand * this.secondOperand;
  }

  addNumber() {
    screen.textContent !== '0'
      ? (screen.textContent += e.currentTarget.textContent)
      : (screen.textContent = e.currentTarget.textContent);
  }

  displayText() {}

  clear() {
    this.currentOperand = '';
  }
}

// const operate = (operator, a , b) =>

// math functions

// const power = (num, power) => Math.pow(num, power);

// const factorial = (num) => {
//   return num > 1 ? num * factorial(num - 1) : 1;
// };
