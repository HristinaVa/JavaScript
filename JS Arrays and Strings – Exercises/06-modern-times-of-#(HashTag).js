function solve(arr) {
    let matches = arr.matchAll(/#[A-Za-z]+/gm);
    for (const match of matches) {
        console.log(match[0].substring(1));

    }
}
