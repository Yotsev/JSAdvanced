function sequence(input, firstTarget, secondTarget){
    let result = input.slice(input.indexOf(firstTarget), input.indexOf(secondTarget)+1)

    return result;
}
console.log(sequence(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'));