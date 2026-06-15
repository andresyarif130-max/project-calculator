const buttons = [
  'AC',
  '⌫',
  '%',
  '÷',
  '7',
  '8',
  '9',
  'x',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '0',
  '.',
  '=',
];

const buttonContainer = document.querySelector('.buttons');
const display = document.querySelector('#display');

let firstNumber = '';
let secondNumber = '';
let operator = '';

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
  if (b === 0) {
    return 'Nice Try!';
  }
  return a / b;
}

function operate(operate, a, b) {
  if (operate === '+') {
    return add(a, b);
  } else if (operate === '-') {
    return subtract(a, b);
  } else if (operate === '*') {
    return multiply(a, b);
  } else if (operate === '/') {
    return divide(a, b);
  }
}

buttons.forEach((value) => {
  const button = document.createElement('button');
  button.textContent = value;

  buttonContainer.appendChild(button);

  if (value === 'AC' || value === '⌫' || value === '%') {
    button.style.backgroundColor = '#a5a5a5';
  } else if (
    value === '÷' ||
    value === 'x' ||
    value === '-' ||
    value === '+' ||
    value === '='
  ) {
    button.style.backgroundColor = '#ff9f0a';
    button.style.color = 'white';
  } else {
    button.style.backgroundColor = '#333';
    button.style.color = 'white';
  }

  if (value === '0') {
    button.style.width = '170px';
    button.style.borderRadius = '50px';
  }

  button.addEventListener('click', () => {
    if (!isNaN(value)) {
      if (display.textContent === '0') {
        display.textContent = '';
      }
      display.textContent += value;
    }

    if (value === '+' || value === '-' || value === 'x' || value === '÷') {
      firstNumber = display.textContent;

      operator = value;

      display.textContent = '';
    }

    if (value === '=') {
      secondNumber = display.textContent;

      let symbol = operator;

      if (operator === 'x') {
        symbol = '*';
      } else if (operator === '÷') {
        symbol = '/';
      } else if (operator === '-') {
        symbol = '-';
      }
    }
  });
});
