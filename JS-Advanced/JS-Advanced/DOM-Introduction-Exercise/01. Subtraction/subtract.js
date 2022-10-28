function subtract() {
    let first = document.getElementById('firstNumber').value;
    let second = document.getElementById('secondNumber').value;

    let result = first - second;

    let divToAppend = document.getElementById('result');

    divToAppend.innerText = result;
}