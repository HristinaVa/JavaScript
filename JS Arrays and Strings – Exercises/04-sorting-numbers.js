function solve(arr) {
    let newArr = [];
    let num = (arr.length) / 2;
    arr.sort((a, b) => a - b);
    for (let index = 0; index < num; index++) {
        const element = arr[index];
        newArr.push(arr.shift(element));
        newArr.push(arr.pop(element));
    }

    return newArr
}
