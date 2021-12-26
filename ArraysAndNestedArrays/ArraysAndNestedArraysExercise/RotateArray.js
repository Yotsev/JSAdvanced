function rotation(input, rotations) {
    for (let i = 0; i < rotations; i++) {
        input.unshift(input.pop());
    }

    console.log(input.join(' '));
}

rotation(['1', 
'2', 
'3', 
'4'], 
2)
rotation(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15)