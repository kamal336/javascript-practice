// recursion
let sum = 0;

for(let i = 10; i >= 1; i--){
    sum = sum + i;
    
}
console.log('Recursion by loop', sum);

// recursive function
const recursion = (n) =>{
    if(n == 1){
        return 1;
    }

    return recursion(n - 1) + n;
}

console.log('Recursion by function', recursion(6));