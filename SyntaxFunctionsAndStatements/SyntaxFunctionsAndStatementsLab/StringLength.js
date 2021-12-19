function sumOfLengthsAndAvg(first, second, third){
    let totalLength = first.length + second.length + third.length;
    let avg = Math.floor(totalLength/3)
    console.log(totalLength);
    console.log(avg);
}
sumOfLengthsAndAvg('chocolate', 'ice cream', 'cake');
sumOfLengthsAndAvg('pasta', '5', '22.3');

