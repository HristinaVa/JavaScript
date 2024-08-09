function addItem() {
    const text = document.getElementById('newItemText');
    const valueEl = document.getElementById('newItemValue');
    const select = document.getElementById('menu');

    const option = document.createElement('option');
    option.textContent = `${text.value} ${valueEl.value}`;

    select.appendChild(option);

    text.value = '';
    valueEl.value = '';

}
