function arange(input){
    let result = [];
    for (const number of input) {
        if (number<0) {
            result.unshift(number);
        }else{
            result.push(number)
        }
    }

    return result;
}

console.log(arange([7, -2, 8, 9]));