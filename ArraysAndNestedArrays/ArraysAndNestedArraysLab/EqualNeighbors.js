function pairs(input) {
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
// console.log(pairs([['2', '3', '4', '7', '0'],
// ['4', '0', '5', '3', '4'],
// ['2', '3', '5', '4', '2'],
// ['9', '8', '7', '5', '4']]));
// console.log(pairs([['test', 'yes', 'yo', 'ho'],
// ['well', 'done', 'yo', '6'],
// ['not', 'done', 'yet', '5']]));
console.log(pairs([[2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]));




