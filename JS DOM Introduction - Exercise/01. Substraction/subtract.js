function subtract() {
    const num1 = document.getElementById('firstNumber');
    const num2 = document.getElementById('secondNumber');
    let sum = document.getElementById('result');

    sum.textContent = Number(num1.value) - Number(num2.value);
}
