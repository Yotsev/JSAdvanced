function solve(input) {
    let sum = input.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);
    let inverce = input.reduce((acc, curr) => acc + 1 / curr, 0);
    console.log(inverce);
    let concat = input.reduce((acc, curr) => acc + `${curr}`)
    console.log(concat);
}
solve([1, 2, 3])