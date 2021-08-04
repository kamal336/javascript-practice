// factorial 
/*
 1! = 1;
 2! = 2 X 1;
 3! = 3 X 2 X 1;
 4! = 4 X 3 X 2 X 1;
 5! = 5 X 4 X 3 X 2 X 1;
 6! = 6 X 5 X 4 X 3 X 2 X 1;
 7! = 7 X 6 X 5 X 4 X 3 X 2 X 1;
 8! = 8 X 7 X 6 X 5 X 4 X 3 X 2 X 1;
 9! = 9 X 8 X 7 X 6 X 5 X 4 X 3 X 2 X 1;
 10! = 10 X 9 X 8 X 7 X 6 X 5 X 4 X 3 X 2 X 1;
*/


// factorial forwad way

// loop multiplication
var factorial = 1;
for(let i = 1; i <= 5; i++){
   factorial = factorial * i;
   console.log(factorial);
}
console.log('multipcation loop end');

// loop addition 
let sum = 0;
for(let i = 1; i <= 10; i++){
    sum = sum + i;
    console.log(sum)
}
console.log("Addition factorial ends.");

// while looop
var x = 1;
var factorialWhile = 1;
while (x <= 6) {
    x++;
    factorialWhile = factorialWhile * x;
   console.log(factorialWhile);
}
console.log('Factorial multiplication ends.')

let addWhile = 0;
let add = 0;
while (add <= 5) {
    add++;
    addWhile = addWhile + add;
    console.log(addWhile);
}
