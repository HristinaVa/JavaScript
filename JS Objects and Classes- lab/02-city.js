function city(input){
    let cityKeys = Object.keys(input);
    for (let cityKey of cityKeys) {
        console.log(`${cityKey} -> ${input[cityKey]}`);
    }
}

