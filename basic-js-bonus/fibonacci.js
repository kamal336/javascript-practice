// // fibonacci function by recursion
const fibonacci=(n)=>{
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}
  console.log(fibonacci(8));

// fibonacci by general for loop
let fibo = [0,1];
for(let i = 2; i <= 8; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2];
    
}
console.log(fibo);