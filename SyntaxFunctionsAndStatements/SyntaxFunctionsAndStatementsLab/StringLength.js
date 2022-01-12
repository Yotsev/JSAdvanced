function solve(firstWord, secondWord, thirdWord){
    let totalLength = firstWord.length + secondWord.length + thirdWord.length;
    let avg = Math.floor(totalLength/3);

    console.log(totalLength);
    console.log(avg);
}
solve('chocolate', 'ice cream', 'cake')