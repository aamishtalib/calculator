// script.js

let currentInput = '';  // Stores the current input in the display

// Append number to the current input
function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

// Append operator to the current input
function appendOperator(operator) {
    currentInput += ` ${operator} `;
    document.getElementById('display').value = currentInput;
}

// Clear the display
function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = currentInput;
}

// Calculate the result
function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();  // Evaluate the current input
        document.getElementById('display').value = currentInput;
    } catch (error) {
        document.getElementById('display').value = 'Error';
        currentInput = '';
    }
}
