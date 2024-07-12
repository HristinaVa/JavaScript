function solve(arr, num) {
    let cutPoint = num % arr.length;
    let leftSide = arr.slice(0, cutPoint);
    let rightSide = arr.slice(cutPoint);
    let result = rightSide.concat(leftSide);
    console.log(result.join(' '));
}
