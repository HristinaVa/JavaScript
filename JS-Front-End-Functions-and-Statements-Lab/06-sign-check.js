function solve(num1, num2, num3) {
    const multiply = (a, b) => a * b;
    let result = multiply(num3, (multiply(num1, num2)));
    if (result < 0) {
        console.log("Negative");
    }
    else {
        console.log('Positive');
    }
}
