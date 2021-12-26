function smallestTwo(input) {
    let result = input.sort((a,b) => a-b);
    result = result.slice(0,2);
    console.log(result.join(' '));
}

smallestTwo([30, 15, 50, 5])
smallestTwo([3, 0, 10, 4, 7, 3])