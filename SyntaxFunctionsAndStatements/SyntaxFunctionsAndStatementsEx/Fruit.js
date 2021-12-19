function canBuy(fruit, weight, priceParKg){
    
    let type = fruit;
    let kg = weight/1000;
    let money = kg*priceParKg;
    
    console.log(`I need $${money.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${type}.`);
}
canBuy('orange', 2500, 1.80)
canBuy('apple', 1563, 2.35)