function solve(number) {
    let numArray = number.toString().split('');
    numArray = numArray.map(Number);
    let odd = 0;
    let even = 0;
    for (let index = 0; index < numArray.length; index++) {
        const element = numArray[index];

        if (element % 2 === 0) {
            even += element;
        }
        else if (element % 2 !== 0) {
            odd += element
        }
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);

}
