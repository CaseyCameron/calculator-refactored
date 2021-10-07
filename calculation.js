export default function calculate(num1, num2, operator) {
    switch (true) {
        case operator === 'add':
            return num1 + num2;
        case operator === 'subtract':
            return num1 - num2;
        case operator === 'multiply':
            return num1 * num2;
        case operator === 'divide':
            return num1 / num2;
    }
}
