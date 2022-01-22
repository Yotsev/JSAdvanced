function solve(input) {
    car = {
        model: '',
        engine: {
            power: 0,
            volume: 0
        },
        carriage: {
            type: '',
            color: ''
        },
        wheels: []
    };

    car.model = input.model;
    if (input.power <= 90) {
        car.engine.power = 90;
        car.engine.volume = 1800;
    } else if (input.power <= 120) {
        car.engine.power = 120;
        car.engine.volume = 2400;
    } else if (input.power <= 200) {
        car.engine.power = 200;
        car.engine.volume = 3500;
    }

    car.carriage.type = input.carriage;
    car.carriage.color = input.color;

    if (input.wheelsize % 2 === 0) {
        let size = --input.wheelsize;
        car.wheels = Array(4).fill(size);
    }else{
        car.wheels = Array(4).fill(input.wheelsize);
    }
    return car;
}
console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
})); 