function addOrRemove(input) {
    let commandCount = 0;
    let inital = [];
    for (let i = 0; i < input.length; i++) {
        commandCount++;
        if (input[i] === 'add') {
            inital.push(commandCount)
        } else {
            inital.pop()
        }
    }

    if (inital.length > 0) {
        console.log(inital.join('\n'));
    } else {
        console.log('Empty');
    }
}

addOrRemove(['add',
    'add',
    'add',
    'add'])
addOrRemove(['add',
    'add',
    'remove',
    'add',
    'add'])
addOrRemove([['remove',
    'remove',
    'remove']])