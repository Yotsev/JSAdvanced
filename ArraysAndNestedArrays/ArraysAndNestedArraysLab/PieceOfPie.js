function solve(input, firstTarget, secondTarget){
    let result = input.slice(input.indexOf(firstTarget), input.indexOf(secondTarget)+1)

    return result;
}