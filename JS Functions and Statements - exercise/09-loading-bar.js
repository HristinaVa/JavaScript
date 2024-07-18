function solve(num) {
    let arr = [];
    let char = '%';
    arr.push(char.repeat(num / 10))
    arr.push('.'.repeat(10 - (num / 10)))
    if (num < 100) {
        console.log(`${num}${char} [${arr.join('')}]`);
        console.log('Still loading...');

    }
    else {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');

    }
}

