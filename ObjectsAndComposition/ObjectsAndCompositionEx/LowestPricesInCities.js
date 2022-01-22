function solve(input) {
    let produtcts = [];

    for (const town of input) {
        let [city, produtct, price] = town.split(' | ');
        price = Number(price);
        const currentTown = { city, produtct, price };

        let existingItem = produtcts.find(x => x.produtct === currentTown.produtct);
        if (!existingItem) {
            produtcts.push(currentTown);
        } else {
            if (existingItem.price <= currentTown.price) {
                continue;
            } else {
                existingItem.city = currentTown.city;
                existingItem.price = currentTown.price;
            }
        }
    }

    produtcts.forEach(element => {
        console.log(`${element.produtct} -> ${element.price} (${element.city})`);

    });
}
solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'])

solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    ' Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    ' Washington City | Mercedes | 1000',])