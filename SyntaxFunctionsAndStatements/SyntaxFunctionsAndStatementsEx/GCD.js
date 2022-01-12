function solve(firstNum, secondNum){
    function divisor(firstNum, secondNum) {

        while (secondNum > 0) {
            let temp = secondNum;
            secondNum = firstNum % secondNum;
            firstNum = temp;
        }
    
        console.log(firstNum);
    }
}