function sequence(input){
    let currentBiggestNum = Number.MIN_SAFE_INTEGER;
    let result = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i]>=currentBiggestNum) {
            result.push(input[i]);
            currentBiggestNum = input[i];
        }

        input.reduce()
    }

    return result;
}

console.log(sequence([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]));