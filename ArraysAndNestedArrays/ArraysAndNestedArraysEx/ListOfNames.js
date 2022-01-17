function solve(input){
    let counter = 1;
    input.sort((a,b)=> a.localeCompare(b)).forEach(element => {
        console.log(`${counter++}.${element}`);
    });
}
solve(["John", "Bob", "Christina", "Ema"])