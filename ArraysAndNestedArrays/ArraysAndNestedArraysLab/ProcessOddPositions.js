function solve(input) {
    let result = [];

    for (let i = 1; i < input.length; i+=2) {
        result.push(input[i])
    }

    result = result.map(x=>x*2).reverse();
    
   return result;
}