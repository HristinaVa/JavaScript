function sumTable() {
    debugger;
    let sumElement = document.getElementById('sum');
    const tdElements = document.querySelectorAll('table tr td:nth-child(2):not(#sum)')
    sumElement.textContent = Array.from(tdElements).reduce((sum, curr) => sum + Number(curr.textContent), 0);
}
