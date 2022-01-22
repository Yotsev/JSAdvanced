function solve(input){
    let object = {};

    for (let i = 0; i < input.length; i+=2) {
        object[input[i]] = Number(input[i+1]);
    }

    console.log(object);
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
