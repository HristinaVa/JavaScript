function encodeAndDecodeMessages() {
    const inputEl = document.querySelector('div:first-of-type textarea');
    const outputEl = document.querySelector('div:nth-of-type(2) textarea');
    const sendButton = document.querySelector('div:first-of-type button');
    const readButton = document.querySelector('div:nth-of-type(2) button');

    sendButton.addEventListener('click', () => {
        const sendMessage = encodeMessage(inputEl.value);
        inputEl.value = '';
        outputEl.value = sendMessage;
    });

    readButton.addEventListener('click', () => {
        const readMessage = decodeMessage(outputEl.value);
        outputEl.value = readMessage;
    });
    function encodeMessage(message) {
        return transformMessage(message, 1);
    }

    function decodeMessage(message) {
        return transformMessage(message, -1);
    }

    function transformMessage(message, n) {
        return message.split('')
        .map(symbol => String.fromCharCode(symbol.charCodeAt(0) + n)).join('');
    }
}
