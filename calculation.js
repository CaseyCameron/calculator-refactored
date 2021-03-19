export function add(num1, num2){
    return num1 + num2;
}

export function subtract(num1, num2){
    return num1 - num2;
}

export function multiply(num1, num2){
    return num1 * num2;
}

export function divide(num1, num2){
    return num1 / num2;
}

export function calculate(num1, num2, operator){
    if (operator === 'add'){
        return num1 + num2;
    } else if (operator === 'subtract') {
        return num1 - num2;
    } else if (operator === 'multiply'){
        return num1 * num2;
    } else if (operator === 'divide'){
        return num1 / num2;
    } else {
        return null;
    }
}
