function solve(input) {
    let bigestNumber = Number.MIN_SAFE_INTEGER;
    let ouput = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] >= bigestNumber) {
            ouput.push(input[i])
            bigestNumber = input[i];
        }
    }
    return ouput;
}
console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
)); 