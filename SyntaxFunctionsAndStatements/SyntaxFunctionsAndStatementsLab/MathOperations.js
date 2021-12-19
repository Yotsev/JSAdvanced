function operations(firstNum, secondNum, operator){
    let result;

    switch(operator){
        case '+': result = firstNum+secondNum;break;
        case '-': result = firstNum-secondNum;break;
        case '/': result = firstNum/secondNum;break;
        case '*': result = firstNum*secondNum;break;
        case '%': result = firstNum%secondNum;break;
        case '**': result = firstNum**secondNum;break;
    }
    console.log(result);
}
operations(5, 6, '+')
operations(3, 5.5, '*')