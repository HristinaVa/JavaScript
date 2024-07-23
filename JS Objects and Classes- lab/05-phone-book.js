function solve(input){
    let phoneBook = [];
    for(const entry of input){
        let[name, phone] = entry.split(' ');

        phoneBook[name]= phone;
        

    } 
    for(const name in phoneBook){
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}

