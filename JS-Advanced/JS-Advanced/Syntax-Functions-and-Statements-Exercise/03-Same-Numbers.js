function sameNumbers(num) {
    let numAsString = num.toString();
    
    let firstSymbol = numAsString[0];
    let sum = 0;

    let boolean = false;

    for (let i = 0; i < numAsString.length; i++) {
        const element = numAsString[i];
        sum += parseInt(element);
        if (element == firstSymbol) {
            boolean = true;
        }
        else boolean = false;
    }
    console.log(boolean);
    console.log(sum);
}