function solve(num) {
    let numArray = num.toString().split(',');
    for (let index = 0; index < numArray.length; index++) {
        let element = (numArray[index]).toString().split('');
        if (element.reverse().join('') == numArray[index]) {
            console.log('true');

        }
        else {
            console.log('false');
        }
    }
}
