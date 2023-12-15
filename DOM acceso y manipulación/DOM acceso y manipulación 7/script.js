let currentInput = '';
let currentOperator = '';
let display = document.getElementById('display');

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput !== '') {
        currentOperator = operator;
        currentInput += ' ' + operator + ' ';
        updateDisplay();
    }
}

function calculate() {
    if (currentInput !== '') {
        try {
            currentInput = eval(currentInput).toString();
            updateDisplay();
        } catch (error) {
            currentInput = 'Error';
            updateDisplay();
        }
    }
}

function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput;
}
