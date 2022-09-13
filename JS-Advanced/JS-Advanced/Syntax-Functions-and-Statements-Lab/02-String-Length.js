function String_Length(...params) {
    let sum = 0;
    let averageSum = 0;

    for (let i = 0; i < params.length; i++) {
        const element = params[i].length;
        
        sum += element;
    }
    averageSum = Math.round(sum / params.length);

    console.log(sum);
    console.log(averageSum);
}