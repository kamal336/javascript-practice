// quiz practice 
const numbers = [33,22,44,55,34];
console.log(numbers);

numbers.unshift(25);
console.log(numbers);

console.log(`${3+3}`);

const myFunc =()=> console.log('akter');
console.log(myFunc());

const division = (num1, num2) => console.log(num1/num2);
console.log(division(4,2));

const nayikas = ['mousumi','popy','shabnur','purnima'];
console.log(nayikas);

const array2 = [...nayikas];
console.log(array2);

const maxNum = Math.max(...numbers);
console.log(maxNum);

const cars = ['toyota','honda','mercedes'];
const newCars = [...cars,'ferrari'];
console.log(newCars);