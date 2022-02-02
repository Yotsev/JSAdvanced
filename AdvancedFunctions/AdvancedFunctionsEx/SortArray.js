function solve(inputArray, order){
    let ordering;

    if (order === 'asc') {
        ordering = (a,b) => a-b;
    }else if (order === 'desc') {
        ordering = (a,b) => b-a;
    }

    return inputArray.sort(ordering);
}

solve([14, 7, 17, 6, 8], 'dasc')