function solve(words, string) {
    let newstr = string;
    words.split(', ').forEach(element => {
        let searchValue = '*'.repeat(element.length);
        newstr = newstr.replace(searchValue, element);
    });
    console.log(newstr);
}
