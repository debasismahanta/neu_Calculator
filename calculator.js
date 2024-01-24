function appendNumber(number) {
    document.getElementById('display').value += number;
}
function appendOperator(operator) {
    const displayValue = document.getElementById('display').value;
    const lastCharacter = displayValue[displayValue.length - 1];
    if (lastCharacter === '+' || lastCharacter === '-' || lastCharacter === '*' || lastCharacter === '/') {
        document.getElementById('display').value = displayValue.slice(0, -1) + operator;
    } else {
        document.getElementById('display').value += operator;
    }
}
function calculate() {
    const displayValue = document.getElementById('display').value;
    try {
        const result = eval(displayValue);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
function clearDisplay() {
    document.getElementById('display').value = '';
}