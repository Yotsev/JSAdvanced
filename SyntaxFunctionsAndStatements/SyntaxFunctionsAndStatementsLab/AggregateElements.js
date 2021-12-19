function agragate(input){

    let sum = 0;
    let invertedSum = 0;
    let concat = '';
    for (let i = 0; i < input.length; i++) {
        sum+=input[i];
        invertedSum+=1/input[i];
        concat+=input[i];
    }

    console.log(sum);
    console.log(invertedSum);
    console.log(concat);
}

agragate([1,2,3])
agragate([2,4,8,16])