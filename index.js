const resultInput = document.getElementById('result');
let calculation = '';

function appendNumber(number) {
  calculation += number;
  resultInput.value = calculation;
  scrollInput();
}

function appendOperator(operator) {
  calculation += operator;
  resultInput.value = calculation;
  scrollInput();
}

function calculate() {
  try {
    const result = eval(calculation);
    resultInput.value = result;
    calculation = '';
  } catch (error) {
    resultInput.value = 'Try again...';
  }
}

function makeNumFloat() {
    calculation += '.';
    resultInput.value = calculation;
}

function deleteLast() {
  calculation = calculation.slice(0, -1);
  resultInput.value = calculation;
}

function clearAll() {
  calculation = '';
  resultInput.value = '';
}

function scrollInput() {
    resultInput.scrollLeft = resultInput.scrollWidth;
}

document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
  const key = event.key;
  if (isNumberKey(key)) {
    appendNumber(parseInt(key));
  } else if (isOperatorKey(key)) {
    appendOperator(key);
  } else if (key === '.') {
    makeNumFloat();
  } else if (key === 'Enter' || key === '=') {
    calculate();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key === 'Escape') {
    clearAll();
  }
}

function isNumberKey(key) {
  return /^\d$/.test(key);
}

function isOperatorKey(key) {
  return ['+', '-', '*', '/'].includes(key);
}
