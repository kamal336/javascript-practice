// swap method 

let first = 5;
let second = 7;
console.log(first,second);
let temp = first;
first = second;
second = temp;
console.log(first,second);

let firstNum = 12;
let secondNum = 20;
console.log('Before swap',firstNum,secondNum);
let tempNum = firstNum;
firstNum = secondNum;
secondNum = tempNum;
console.log('After swap',firstNum,secondNum);

// destructuring
let number1 = 10;
let number2 = 15;
console.log('Before destructuring',number1,number2);

 [number1,number2] = [number2,number1];
console.log('After destructuring', number1,number2);