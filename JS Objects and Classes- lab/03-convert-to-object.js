function convert(jsonStr){
    let obj = JSON.parse(jsonStr);
    Object.keys(obj).forEach(keys => {console.log(`${keys}: ${obj[keys]}`);})
}
