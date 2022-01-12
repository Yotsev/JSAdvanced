function solve(firstArg, secondArg){
    let firstNumbere = Number(firstArg);
    let secondNumbere = Number(secondArg);

    let sum = 0;

    for (let i = firstNumbere; i <= secondNumbere; i++) {
        sum += i;
    }

    console.log(sum);
}
solve('1', '5' )
solve('-8', '20')