// variable let and const 
const first = 'Akter';
const last = 'Kamal';

console.log(`My name is ${first} ${last}`);

let sum = 0;

for(let i = 0; i <= 10; i++){
    sum = sum + i;
   console.log(i);
}
console.log(`Sum : ${sum}`);

//arrow function and function default parameter 
const myFunc =(n = 'Please give a name')=> n;
console.log(myFunc('Akter Kamal'));

const addNumber =(num1, num2)=> num1 + num2;
console.log(`Sum = ${addNumber(4,6)}`);

const addResult =(num1,num2,num3 = 5)=>{ 
    const first = num1 + num2
    const second = first * num3
    const result = first + second;
    return result;
};

console.log(`Result = ${addResult(3,5,15)}`);

// templete leteral 
const wife = `
              Koli is friend and 
              She is my coligue also
              and The most important 
              ineteresting thing is,
              She is life partner.
                    courtesy kamal.`

    console.log(`About Naim: ${wife}`);

// spread operator three idiots 
const numbers = [54,33,21,15,66];
console.log(numbers);
console.log(...numbers);
console.log(`Spread operator : ${numbers}`);

const maxNum = Math.max(...numbers);
console.log(`Maximum Number : ${maxNum}`);

const minNum = Math.min(...numbers);
console.log(`Minimum Number : ${minNum}`);