function solve(char1, char2) {
    const charCode1 = char1.charCodeAt(0);
    const charCode2 = char2.charCodeAt(0);
    let newCode = [];
    if (charCode1 < charCode2) {
        for (let index = charCode1 + 1; index < charCode2; index++) {

            let char = String.fromCharCode(index);

            newCode.push(char);
        }
        console.log(newCode.join(' '));
    }
    else if (charCode1 > charCode2) {
        for (let index = charCode2 + 1; index < charCode1; index++) {

            let char = String.fromCharCode(index);

            newCode.push(char);
        }
        console.log(newCode.join(' '));

    }
}
solve('C',

'#')
