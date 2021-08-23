// arrow function 
const addNumbers =(num1,num2)=> num1 + num2;
console.log(addNumbers(23,42));

const numberFunc =(x,y,z)=>{
    const firstNumber = x + y;
    const secondNumber = x * z;
    const thirdNumber = (y * z)/x;
    const total = firstNumber + secondNumber + thirdNumber;
    return total;
}

console.log(numberFunc(10,44,6))

const myName =(first,last)=> `${first} ${last}.`;
console.log(myName('akter','kamal =>'),myName('jannatul','naim. We are husband wife'));
