let factorial = (n) =>{
    if(n == 1){
        return 1;
    }
    return n * factorial (n - 1);
}

let getFactorial = factorial(5);
console.log('Factorial number is',getFactorial);

// recursive loop
let number = 1;
const loopFactorial = (num) => {
    if (num == 1) {
        return 1; 
    }
    for(let i = num; i >= 1; i--){
         number *= i;
    }
    return number;
}

let getLoopFactorial = loopFactorial(5);
console.log('Loof factorial is',getLoopFactorial);

const addNumber = (add) =>{
    if(add === 0){
      return 0;
    }else{
       return add + addNumber(add-1);
    }
}

console.log('Result =',addNumber(10));

const mulNumber =(mul) =>{
    if(mul == 1){
        return 1;
    }else{
        return mul * mulNumber(mul - 1);
    }
}

console.log('Multiplication number is', mulNumber(5));

