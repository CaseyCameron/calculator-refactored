import calculation from './calculation.js';

function calculator(id) {
    const number1 = document.getElementById(`${id}-input-1`);
    const number2 = document.getElementById(`${id}-input-2`);
    const button = document.getElementById(`${id}-button`);
    const result = document.getElementById(`${id}-result`);

    button.addEventListener('click', () => {
        result.textContent = calculation(+number1.value, +number2.value, id);
    });
}

calculator('add');
calculator('subtract');
calculator('multiply');
calculator('divide');
