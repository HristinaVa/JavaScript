function solve(text, word) {
let newText = text.replaceAll(word, '*'.repeat(word.length))
console.log(newText);
}
