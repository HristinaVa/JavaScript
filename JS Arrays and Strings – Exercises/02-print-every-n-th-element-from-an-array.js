function solve(arr, step) {
    let newarr = [];
    for (let index = 0; index < arr.length; index += step) {
        newarr.push(arr[index]);

    }
    return newarr;
}
