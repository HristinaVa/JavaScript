function solve(num) {
    let arr = num.toString().split('');
    arr = arr.map(Number);
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        sum += element
    }
    while ((sum / arr.length) < 5) {
        arr.push(9);
        sum+=9
    }
    console.log(arr.join(''));
}
solve(5835)
