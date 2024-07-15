function solve(word, text){
    let arr = text.split(' ');

    for (let element of arr) {
        if (element.toLowerCase() === word.toLowerCase()) {
            return word;
        }
        return `${word} not found!`;

}
}
