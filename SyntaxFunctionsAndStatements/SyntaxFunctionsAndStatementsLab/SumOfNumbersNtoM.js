function sumOfNumbers(first, second){
    let result = 0;
    let firstNum = Number(first);
    let secondNum = Number(second);

    for (let index = firstNum; index <= secondNum; index++){
        result+=index;
    }

    console.log(result);
}
sumOfNumbers('1', '5' )
sumOfNumbers('-8', '20')