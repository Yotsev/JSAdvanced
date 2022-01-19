function solve(input){
    let cities = {};

    for (let i = 0; i < input.length; i++) {
       let [cityName, populationString] = input[i].split(' <-> ')    
    let population = Number(populationString);
    
       if (!cities[cityName]) {
        cities[cityName] = 0;
       }
       cities[cityName] += population;

    }

    for (const key in cities) {
       console.log(`${key} : ${cities[key]}`);
    }
}
solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'])