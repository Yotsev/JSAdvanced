function solve(...arguments) {
    
    let output = {};
   
    while (arguments.length > 0) {
        let currentArg = arguments.shift()
        if (!output.hasOwnProperty(typeof currentArg)) {
            output[typeof currentArg] = 0
        }
        output[typeof currentArg]++;
        console.log(`${typeof currentArg}: ${currentArg}`);
    }

    Object.keys(output).sort((a,b)=> output[b]- output[a]).forEach(el => console.log(`${el} = ${output[el]}`));
}
solve({ name: 'bob'}, 3.333, 9.999);