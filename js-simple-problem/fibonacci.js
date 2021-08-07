/* 
fibonacci = 0, 1, 1, 3, 5, 8, 13, 21, 34, 55 .....

3rd = 2nd + 1st
4th = 3rd + 2nd
5th = 4th + 3rd
6th = 5th + 4th
7th = 6th + 5th
8th = 7th + 6th
9th = 8th + 7th 
10th = 9th + 8th
nth = (n-1)th + (n-2)th
ith = (i - 1)th + (i - 2)th
*/
/* 
let fibo = [0,1];
for(let i = 2; i <= 12; i++){
    fibo[i] = fibo[i - 1] + fibo[i -2];
    
}
console.log(fibo);

const fibonacci = [0,1];

for(let x = 2; x < 12; x++){
    fibonacci[x] = fibonacci[x - 1] + fibonacci[x - 2];
}
console.log(fibonacci);
 */
// fibonacci in function
const fibonacciSeries=(n)=>{
    if(typeof n == 'n'){
        return 'Please give a number.';
    }if (n < 2) {
        return 'Please enter give a positive number greater than 1.';
    }
   let fibon = [0,1];
   for(let i = 2; i < n; i++){
       fibon[i] = fibon[i - 1] + fibon[i - 2]; 
   }
   return fibon;
}

console.log(fibonacciSeries(8));
