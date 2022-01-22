function solve(input) {
    input = input.sort((a, b) => a.localeCompare(b));
    let cataloge = {};

    for (const product of input) {

        if (!cataloge.hasOwnProperty(product[0])) {
            cataloge[product[0]] = [];
        }

        cataloge[product[0]].push(product);
    }

    for (const key in cataloge) {
        console.log(key);
        cataloge[key].map(x => x.split(' : ')).forEach(element => {
            console.log(` ${element[0]}: ${element[1]}`);
        });
    }
}
solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])