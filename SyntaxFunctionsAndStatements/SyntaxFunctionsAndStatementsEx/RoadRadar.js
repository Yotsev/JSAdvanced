function solve(limit, place) {
    let currentSpeed = limit;
    let speedLimit;

    switch (place) {
        case 'motorway': speedLimit = 130;
            break;
        case 'interstate': speedLimit = 90;
            break;
        case 'city': speedLimit = 50;
            break;
        case 'residential': speedLimit = 20;
            break;
    }
    let message = '';
    let difference;
    if (currentSpeed <= speedLimit) {
        message = `Driving ${currentSpeed} km/h in a ${speedLimit} zone`;
    } else {
        let status = '';
        difference = currentSpeed - speedLimit;
        if (currentSpeed - speedLimit <= 20) {
            status = 'speeding';
        } else if (currentSpeed - speedLimit > 20 && currentSpeed - speedLimit <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        message = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`;
    }
    console.log(message);
}