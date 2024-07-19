function solve(num) {
    let dna = 'ATCGTTAGGG';
    let counter = 0;
    let dnaArray = dna.repeat(Math.ceil(num / 5)).toString().split('');
    let newarr = [];
    for (let index = 0; index < num * 2; index += 2) {
        const element = dnaArray[index] + dnaArray[index + 1];
        newarr.push(element);

    }
    for (let index = 0; index < newarr.length; index++) {
        const element = newarr[index];
        switch (counter % 4) {
            case 0:
                console.log(`**${element}**`);
                break;
            case 1:
                console.log(`*${element[0]}--${element[1]}*`);
                break;
            case 2:
                console.log(`${element[0]}----${element[1]}`);
                break;
            case 3:
                console.log(`*${element[0]}--${element[1]}*`);
                break;
        }

        counter++;
    }

}
