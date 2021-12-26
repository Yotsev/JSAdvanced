function sum(input){
    let first = Number(input.shift());
    let last = Number(input.pop());

    let result = first+ last;

    return result;
}
console.log(sum(['20', '30', '40']));