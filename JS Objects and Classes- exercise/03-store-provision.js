function solve(arr1, arr2) {
    function generateObjectData(inputArr) {
        return new Array(inputArr.length / 2).fill({}).reduce((acc, cur, i) => {

            const product = inputArr[i + i];
            const quantity = Number(inputArr[i + i + 1]);
            if (!cur[product]) {
                cur[product] = 0;
            }
            cur[product] += quantity;

            return Object.assign(acc, cur);
        }, {});
    }
    const inStock = generateObjectData(arr1);
    const ordered = generateObjectData(arr2);
    const allProducts = structuredClone(inStock);

    Object.keys(ordered).forEach((productName) => {
        if (!allProducts[productName]) {
            allProducts[productName] = 0;
        }
        allProducts[productName] += ordered[productName]
    })
    Object.entries(allProducts).forEach(([key, value]) => {
        console.log(`${key} -> ${value}`);
    })
}
solve([ 

    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2' 
    
    ], 
    
    [ 
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30' 
    
    ] )
