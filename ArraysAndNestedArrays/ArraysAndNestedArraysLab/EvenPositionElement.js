function evenNumbers(input){

    let result = [];

    for (let i = 0; i < input.length; i+=2) {
        result.push(input[i]);
    }

    return result.join(' ');
}

console.log(evenNumbers(['5', '10']));
