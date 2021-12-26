function sequence(end, number){
    let result = [1];

    for (let i = 1; i < end; i++) {
        let temp = result.slice(-number);
        let sum = 0;
        for (const num of temp) {
            sum+=num;
        }
        result.push(sum);
    }

    return result;
    
}

console.log(sequence(8, 2));