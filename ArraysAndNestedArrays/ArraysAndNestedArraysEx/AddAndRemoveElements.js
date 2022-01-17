function solve(input) {
    let output = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'add') {
            output.push(i + 1);
        } else if (input[i] === 'remove') {
            output.pop();
        }
    }
    output.length === 0 ? console.log('Empty') : console.log(output.join('\n'));;
}
solve(['add',
    'add',
    'add',
    'add'])