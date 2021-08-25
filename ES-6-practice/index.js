// 1. declare variable by const and let 
const name = 'akter kamal';
let age = 29;
   age = 30;

console.log('My name is '+ name +'. I am '+age +' years old.');

// 2. template String or template letarals 
const myDetails = `I am ${name}. I am from Bangladesh. I am ${age} years old.`
console.log(myDetails);

const myDetails1 = {
    name : `${name}`,
    age : `${age}`,
    address: `Bangladesh`
}
console.log(myDetails1);

// 3. Arrow function  

// 3.1 declare a function with a single parameter and take input then divided by 5 this parameter value 
const myFunc1 = num => num /5;

console.log(`The single parameter result = ${myFunc1(30)}`)

// 3.2  with two parameters. will add two to each number and then multiply the result. 
const myFunc2 = (num1,num2)=> (num1 + 2) *(num2 + 2);

console.log(`The two parameter result is ${myFunc2(2,2)}`);

// 3.3  three parameters. will multiply all three parameters
const myFunc3 = (num1,num2,num3) => num1 * num2 * num3;
console.log(`The three parameter function result = ${myFunc3(2,3,4)}`)

// 3.4 with two parameters but it will be a multi line arrow function. will add two to each number and then multiply the result.
const myFunc4 = (num1,num2)=>{ 
    const first = num1 + 2;
    const second = num2 + 2;
    const result  = first * second;
    return result;

};
console.log(`The two parameter and return function result = ${myFunc4(2,3)}`)

// 4. [home work]: javascript function declaration vs arrow function
// 4.5 [extra home work]: javascript var, const and let diffence 

// 5. array of numbers. and then map to get each elements multiplied by 5. must use arrow function

const numbers = [4,3,6,8,2];
const mapArray = numbers.map(x => x * 5);
console.log(`Map array is ${mapArray}`);

// by arrow function
const mapFunc = (numbers) => numbers.map(x => x*5);
console.log(mapFunc(numbers));

// 6.[challenging] numbers of array. get odd numbers by using filter with arrow function. 
const numbers2 = [44,5,76,33,88,9,26,99];

const filterFun = (numbers) => numbers.filter(x => x % 2);
console.log(filterFun(numbers2));
console.log(`The odd number ${filterFun(numbers2)}`);

// 7. [challenging] array of objects (e.g. products). use find to get the object with price 5000.
const products = [
    {productName: 'Laptop',price: 33000},
    {productName: 'Mobile',price: 5000},
    {productName: 'headphone',price: 400},
    {productName: 'cycle',price: 500},
    {productName: 'Mobile',price: 5000},
]
// console.log(products);

const findFun = products.find(x =>x.price == 5000);
console.log(findFun);

// 8. You have an object. Now use destructing to create a simple variable of any property of the object.
const wifeDetails = {
    wifeName: 'naim',
    wifAge: 27,
    occupation: 'Medical Technologist'
}
// const herName = wifeDetails.wifeName;
// console.log(herName)

const {wifeName, wifAge, occupation} = wifeDetails;
console.log(wifeName,wifAge,occupation);

// 9. [challenging] You have an array. Now use destructing to create a simple (or more) variable to get the third element of the array in a variable called 'three'.
const destructureNumbers = [33,55,66,4,22,77];

const [one,two,three,four,five,six] = destructureNumbers;
console.log(three);

// 10. [optional] just a write a function with three parameters. and the last parameter will have a default parameter with value 7.
const defaultParaFunc = (num1, num2, num3 = 7) => num1 + num2 + num3;
console.log(defaultParaFunc(3,4,10));