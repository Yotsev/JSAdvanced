function solve(x1, y1, x2, y2){
    function getResult(x1, y1, x2, y2) {
        let result = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
        return result === Math.trunc(result) ? 'valid' : 'invalid';
    }

    return `{${x1}, ${y1}} to {0, 0} is ${getResult(x1, y1, 0, 0)}` + '\n' + `{${x2}, ${y2}} to {0, 0} is ${getResult(x2, y2, 0, 0)}` + '\n' + `{${x1}, ${y1}} to {${x2}, ${y2}} is ${getResult(x1, y1, x2, y2)}`;
}