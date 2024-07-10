function solve(num, input) {
    let input2 = [];
    for (let index = num - 1; index >= 0; index--) {
        const element = input[index];
        input2.push(element);
    }
    console.log(input2.join(' '));
};

