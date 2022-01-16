function solve(input){
    let sortedArray = input.sort((a,b)=> a-b).slice((-input.length-1)/2);

    return sortedArray;
}
solve([3, 19, 14, 7, 2, 19, 6])