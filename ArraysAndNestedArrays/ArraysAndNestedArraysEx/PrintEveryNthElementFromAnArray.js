function solve(input, step){
    let output = [];
    for (let i = 0; i < input.length; i+=step) {
        output.push(input[i])        
    }

    return output;
}
console.log(solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2)); 