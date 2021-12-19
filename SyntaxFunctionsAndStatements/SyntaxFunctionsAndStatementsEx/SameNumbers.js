function same(num) {
    let numAsString = String(num);
    let isSame = true;
    let sum = Number(numAsString[0]);
    for (let i = 0; i < numAsString.length - 1; i++) {
        const current = numAsString[i];
        const next = numAsString[i + 1];

        if (current !== next) {
            isSame = false
        }

        sum += Number(next);
    }

    console.log(isSame);
    console.log(sum);
}

same(2222222)
same(1234)