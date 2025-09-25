const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

let currentInput = '';
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (button.classList.contains('clear')) {
            currentInput = '';
            firstOperand = null;
            operator = null;
            waitingForSecondOperand = false;
            display.value = '';
            return; // Exit function
        }

        if (button.classList.contains('operator')) {
            if (firstOperand === null) {
                firstOperand = parseFloat(currentInput);
            } else if (waitingForSecondOperand === false) {
                // If an operator is pressed consecutively, calculate the previous result
                const result = calculate(firstOperand, operator, parseFloat(currentInput));
                firstOperand = result;
                display.value = result;
            }
            operator = buttonText;
            waitingForSecondOperand = true;
            currentInput = ''; // Clear current input for the next number
            return;
        }

        if (button.classList.contains('equals')) {
            if (firstOperand !== null && operator !== null && currentInput !== '') {
                const result = calculate(firstOperand, operator, parseFloat(currentInput));
                display.value = result;
                firstOperand = result; // Allows chaining calculations
                operator = null;
                waitingForSecondOperand = true; // Ready for a new operation or number
                currentInput = String(result); // Set currentInput to result for further operations
            }
            return;
        }

        // Handle number and decimal point input
        if (waitingForSecondOperand) {
            currentInput = buttonText; // Start new number if waiting for second operand
            waitingForSecondOperand = false;
        } else {
            if (buttonText === '.' && currentInput.includes('.')) {
                return; // Prevent multiple decimal points
            }
            currentInput += buttonText;
        }
        display.value = currentInput;
    });
});

function calculate(num1, op, num2) {
    if (op === '+') return num1 + num2;
    if (op === '-') return num1 - num2;
    if (op === '*') return num1 * num2;
    if (op === '/') {
        if (num2 === 0) {
            alert("Cannot divide by zero!");
            return 0; // Or handle error in display
        }
        return num1 / num2;
    }
    return num2; // Default for when no valid operator is found (e.g., initial state)
}