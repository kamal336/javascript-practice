// variable const and let and template leteral
const name = 'Akter Kamal';
console.log(name);

 let mobile = 'iPhone 7';
mobile = 'samsung s20';
console.log(mobile);

console.log(`My name is ${name}. My new phone is ${mobile}`);

// arrow function and default function parameter
const addNumber =(num1,num2 = 0)=> num1 + num2;
console.log(`Total number is ${addNumber(22,33)}`);

// spread operators 
const numbers = [44,22,2,94,64,78];
console.log(numbers);
console.log(...numbers);

const maxNum = Math.max(...numbers);
console.log(maxNum);

const minNum = Math.min(...numbers);
console.log(`Minimum number is ${minNum}`);