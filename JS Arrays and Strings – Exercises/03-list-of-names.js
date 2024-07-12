function solve(arr) {
    let newarr = arr.sort((a, b) => a.localeCompare(b));
    let num = 0;
    for (let index = 0; index < newarr.length; index++) {
        const element = newarr[index];
        num += 1;
        console.log(`${num}.${element}`);

    }
}
