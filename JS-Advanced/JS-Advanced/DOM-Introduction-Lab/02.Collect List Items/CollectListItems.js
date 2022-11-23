function extractText() {
    let text = document.getElementsByTagName('li');
    let arr = [];
    for (let i = 0; i < text.length; i++) {
        const element = text[i].innerText;
        arr.push(element);
    }

    let textarea = document.getElementById('result');

    textarea.innerText = arr.join('\u000A');
}