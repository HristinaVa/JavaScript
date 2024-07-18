function isValid(word) {
    let regex = /^(?=.*\d.*\d)[a-zA-Z\d]{6,10}$/;
    if (regex.test(word)) {
        console.log("Password is valid");
    }
    else {
        let regexDigits = /(?=(.*\d){2})/;
        let regexSymbol = /^[a-zA-Z0-9]*$/;
        if (word.length < 6 || word.length > 10) {
            console.log('Password must be between 6 and 10 characters');

        }
        if (!regexSymbol.test(word)) {
            console.log('Password must consist only of letters and digits');
        }
        if (!regexDigits.test(word)) {
            console.log('Password must have at least 2 digits');
        }
    }
}
