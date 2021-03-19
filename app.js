import { add, subtract, multiply, divide, } from './calculation.js';

function returnNumber(number){
    return Number(number.value);
}

function calculator(input1, input2, button1, result, calculation){
    const number1 = document.getElementById(input1);
    const number2 = document.getElementById(input2);
    const calculatorButton = document.getElementById(button1);
    const resultFinal = document.getElementById(result);

    calculatorButton.addEventListener('click', () => {
        resultFinal.textContent = calculation(returnNumber(number1), returnNumber(number2));
    });
}

calculator('add-input-1', 'add-input-2', 'add-button', 'add-result', add);
calculator('subtract-input-1', 'subtract-input-2', 'subtract-button', 'subtract-result', subtract);
calculator('multiply-input-1', 'multiply-input-2', 'multiply-button', 'multiply-result',  multiply);
calculator('divide-input-1', 'divide-input-2', 'divide-button', 'divide-result', divide);