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

const fibonacciSeries =(n) =>{
    if(n == 0){
        return 0;
    }if (n == 1) {
        return 1;
    }
   
    return fibonacciSeries(n - 1) + fibonacciSeries(n - 2);
}

console.log('Fibonacci recursive', fibonacciSeries(8))