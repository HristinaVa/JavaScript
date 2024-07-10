function solve(input) {
    let result = 0;;
    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        if (element % 2 === 0) {
            result += element;
        }
        else {
            result -= element;
        }
    }
    console.log(result);
}
