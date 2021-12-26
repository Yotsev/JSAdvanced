function sorting(input) {
    input = input.sort((a, b) => a.length - b.length || a.localeCompare(b))

    for (const name of input) {
        console.log(name);
    }
}

sorting(['alpha',
    'beta',
    'gamma']);