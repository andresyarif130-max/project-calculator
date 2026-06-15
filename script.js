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

buttons.forEach((value) => {
  const button = document.createElement('button');
  button.textContent = value;

  buttonContainer.appendChild(button);

  if (value === 'AC' || value === '⌫' || value === '%') {
    button.style.backgroundColor = '#a5a5a5';
  }
});
// console.log(buttons);
