function fruits(fruit, kg, money){
    let kilo = (kg/1000).toFixed(2);
    let price = (kilo*money).toFixed(2);
    console.log(`I need $${price} to buy ${kilo} kilograms ${fruit}.`);
}
fruits('apple', 1563, 2.35);