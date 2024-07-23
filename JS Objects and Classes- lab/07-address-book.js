function solve(input) {
    let addressBook = [];
    for (const entry of input) {
        let [name, address] = entry.split(':');
        addressBook[name] = address;
    }
    let addressArray = Object.entries(addressBook).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [name, address] of addressArray) {
        console.log(`${name} -> ${address}`);
    }
    
}

