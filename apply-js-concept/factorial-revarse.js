let factorial = 1;
function factorialIncrement(number){
    
    for(let i = number; i >= 1; i--){
        factorial = factorial * i;
    }
    return factorial;
}

let factResult = factorialIncrement(5);
console.log(factResult);


