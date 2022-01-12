function solve(input){
    let numberAsString = input.toString();
    let isSame = true;
    let sum = Number(numberAsString[0]);
    for (let i = 0; i < numberAsString.length-1; i++) {
        if (numberAsString[i]!== numberAsString[i+1]) {
            isSame = false
        }   
        sum+=Number(numberAsString[i+1]);     
    }

    console.log(isSame);
    console.log(sum);
}
solve(22223)