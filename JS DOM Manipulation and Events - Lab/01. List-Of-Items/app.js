function addItem() {
    const items = document.getElementById('items');
    const text = document.getElementById('newItemText');
    const newLi = document.createElement('li');
    newLi.textContent = text.value;
    items.appendChild(newLi)
    text.value = ''
}
