function rectangle(width, height, color) {
    let firstUpper = [...color];
    let upper = firstUpper[0].toUpperCase();
    firstUpper.splice(0,1,upper);
    
    const obj = {
        width,
        height,
        color:firstUpper.join(''),
        calcArea() {
          return  this.width * this.height;
        }
    }
    return obj;
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());