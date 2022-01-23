function calc() {
    const firstNumber = Number(document.getElementById('num1').value);
    const secondNumber = Number(document.getElementById('num2').value);
    const sum = document.getElementById('sum').value = firstNumber + secondNumber;

    console.log(sum);
}
