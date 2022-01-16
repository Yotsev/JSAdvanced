function solve(end, number) {
    let result = [1];

    for (let i = 1; i < end; i++) {
        // (-number) gets the elements form the end of the array
        let temp = result.slice(-number);
        let sum = 0;
        for (const num of temp) {
            sum += num;
        }
        result.push(sum);
    }

    return result;
}
console.log(solve(6, 3)); 