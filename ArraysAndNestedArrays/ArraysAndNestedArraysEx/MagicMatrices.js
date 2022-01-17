function solve(input){
    let isMagic = true;
    let rowSum = 0;
    let colSum = 0;

    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < input[row].length; col++) {
            rowSum += input[row][col];            
        }        
    }
}

solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])