function sums(input){
   
    let twoSums = [0,0];
   
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (i === j) {
                twoSums[0] += input[i][j];
            }
            if (input.length-1-i === j) {
                twoSums[1] += input[i][j];
            }
        }
    }
        console.log(twoSums.join(' '));
}

sums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]])
sums([[20, 40],
    [10, 60]])    