function extractText() {
    const items = document.getElementById('items');
    const result = document.getElementById('result');

    const textResult = items.innerText;
    result.textContent = textResult;

}
