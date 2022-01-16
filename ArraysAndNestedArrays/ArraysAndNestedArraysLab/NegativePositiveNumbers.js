function solve(input){
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