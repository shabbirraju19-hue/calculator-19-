let display = document.getElementById('display');
let currentValue = '0';
let previousValue = null;
let operation = null;
let shouldResetDisplay = false;

function updateDisplay() {
    display.textContent = currentValue;
}

function clearDisplay() {
    currentValue = '0';
    previousValue = null;
    operation = null;
    shouldResetDisplay = false;
    updateDisplay();
}

function deleteLast() {
    if (currentValue.length > 1) {
        currentValue = currentValue.slice(0, -1);
    } else {
        currentValue = '0';
    }
    updateDisplay();
}

function appendNumber(number) {
    if (shouldResetDisplay) {
        currentValue = number;
        shouldResetDisplay = false;
    } else {
        if (number === '.' && currentValue.includes('.')) {
            return;
        }
        if (currentValue === '0' && number !== '.') {
            currentValue = number;
        } else {
            currentValue += number;
        }
    }
    updateDisplay();
}

function appendOperator(op) {
    if (operation !== null && !shouldResetDisplay) {
        calculate();
    }
    previousValue = currentValue;
    operation = op;
    shouldResetDisplay = true;
}

function calculate() {
    if (operation === null || previousValue === null) {
        return;
    }

    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);
    let result;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                currentValue = 'Error';
                updateDisplay();
                setTimeout(clearDisplay, 1500);
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentValue = String(result);
    operation = null;
    previousValue = null;
    shouldResetDisplay = true;
    updateDisplay();
}
