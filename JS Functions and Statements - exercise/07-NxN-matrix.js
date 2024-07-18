function solve(num) {
    let numstr = num.toString();
    for (let index = 0; index < num; index++) {
        let repeatedStr = (numstr + ' ').repeat(num).trim();;

        console.log(repeatedStr);
    }
}
