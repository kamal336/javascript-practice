// genaral method by for loop
let fact = 1;
for(let i = 1; i <= 5; i++){
   fact = fact * i;
   console.log(fact)
}

// genaral method by recursive way 
let fact1 = 1;
for(let i = 6; i >= 1; i--){
    fact1 = fact1 * i;
 
}
console.log(fact1);

// factorial functional recursion
function factorial (n){
    if(n == 1){
        return 1;
    }

    return factorial(n - 1) * n;
}

console.log(factorial(7));