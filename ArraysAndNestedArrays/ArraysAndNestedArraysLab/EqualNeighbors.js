function solve(input){
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (i === input.length - 1) {
                if (input[i][j] === input[i][j + 1]) {
                    sum++;
                }
            } else {
                if (input[i][j] === input[i + 1][j]) {
                    sum++;
                }

                if (input[i][j] === input[i][j + 1]) {
                    sum++;
                }
            }
        }
    }
  
    return sum;
}