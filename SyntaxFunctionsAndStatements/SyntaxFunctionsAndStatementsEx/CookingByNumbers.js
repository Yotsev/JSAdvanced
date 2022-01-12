function solve(input){
    let result = Number(arguments[0]);
    for (let i = 1; i < arguments.length; i++) {
       switch(arguments[i]){
           case 'chop': result/=2;
           break;
           case 'dice': result = Math.sqrt(result);
           break;
           case 'spice': result+=1;
           break;
           case 'bake': result*=3;
           break;
           case 'fillet': result -= result*0.20;
           break;
       } 
       console.log(result);
    }
}