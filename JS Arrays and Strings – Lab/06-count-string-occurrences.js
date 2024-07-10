function solve(text, word) {
    let textArr = text.split(' ');
    let result = 0;
    for (let index = 0; index <= textArr.length; index++) {
        const element = textArr[index];
        if (element === word) {
            result+=1;
        }
    }
    console.log(result);
}
solve('This is a word and it also is a sentence is', 'is');