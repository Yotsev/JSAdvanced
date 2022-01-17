function solve(input){
    input.sort((a,b)=>a.length-b.length || a.localeCompare(b)).forEach(element => {
        console.log(element);
    });
}   
solve(['alpha', 
'beta', 
'gamma'])