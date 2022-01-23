function solve(input){
    let separator = /\s*(?:\||$)\s*/g;
    let [town, latitude,longtude] = input.shift().split(separator).filter(x=>x);
    
    let towns = [];

    for (const line of input) {
        let townInfo = line.split(separator).filter(x=>x);
        let currentTown = {
            [town]:townInfo[0],
            [latitude]: Math.round((Number(townInfo[1])+Number.EPSILON)*100)/100,
            [longtude]: Math.round((Number(townInfo[2])+Number.EPSILON)*100)/100
        }
        towns.push(currentTown);
    }

    return JSON.stringify(towns);
}
console.log(solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']));