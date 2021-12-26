function doubledAndReversed(input) {
    let result = [];

    for (let i = 1; i < input.length; i+=2) {
        result.push(input[i])
    }

    result = result.map(x=>x*2).reverse();
    
   return result;
}
console.log(doubledAndReversed([10, 15, 20, 25]));
console.log(doubledAndReversed([3, 0, 10, 4, 7, 3]));