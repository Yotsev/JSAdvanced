function solve(firstNum, secondNum, thirdNum){
    let largest = [firstNum,secondNum,thirdNum].sort((a,b)=> a-b);
    let result = largest.pop();

    console.log(`The largest number is ${result}.`);
}
solve(-3, -5, -22.5)