function addItem() {
    const listItems = document.getElementById('items');
    const inputText = document.getElementById('newItemText');
    const newLi = document.createElement('li');

    newLi.textContent = inputText.value;
    listItems.appendChild(newLi)

    const deleteButton = document.createElement("a");
    deleteButton.textContent ='[Delete]';
    deleteButton.href = '#';

    deleteButton.addEventListener('click',(e) => {
        e.currentTarget.parentElement.remove();
    })
    newLi.append(deleteButton);
       
    inputText.value = ''

}
