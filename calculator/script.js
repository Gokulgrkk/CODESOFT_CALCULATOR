const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let operator = null;
let previousInput = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const { number, operator: operatorValue, decimal } = button.dataset;

        if (number) {
            handleNumber(number);
        } else if (operatorValue) {
            handleOperator(operatorValue);
        } else if (decimal) {
            handleDecimal();
        } else if (button.id === 'clear') {
            clearDisplay();
        } else if (button.id === 'delete') {
            deleteLast();
        } else if (button.id === 'equals') {
            calculate();
        }
        updateDisplay();
    });
});

function handleNumber(number) {
    currentInput += number;
}

function handleOperator(nextOperator) {
    if (currentInput === '') {
        return;
    }
    currentInput += nextOperator;
}

function handleDecimal() {
    if (!currentInput.includes('.') || operator) {
        currentInput += '.';
    }
}

function clearDisplay() {
    currentInput = '';
    previousInput = null;
    operator = null;
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
    } catch {
        currentInput = 'Error';
    }
}

function updateDisplay() {
    display.innerText = currentInput || '0';
}
