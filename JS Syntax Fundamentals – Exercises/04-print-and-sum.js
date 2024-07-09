function sum(start, end) {
    let numss = 0;
    let output = '';
    for (let index = start; index <= end; index++) {
        numss += index;
        output += `${index} `;
    }
    console.log(output.trim());
    console.log(`Sum: ${numss}`);
}
sum(5, 10);