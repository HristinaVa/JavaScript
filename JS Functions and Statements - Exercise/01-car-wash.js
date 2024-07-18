function solve(operations){
    let value = 0;
    for (let index = 0; index < operations.length; index++) {
        let element = operations[index];
        if (element == 'soap') {
            value+=10;
        }
        else if(element ==='water'){
            value+=value*0.2;
        }
        else if (element === 'mud') {
            value-= value*0.1;
        }
        else if ('vacuum cleaner') {
            value+=value*0.25;
        }
    }
   console.log(`The car is ${value.toFixed(2)}% clean.`);
}
solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
