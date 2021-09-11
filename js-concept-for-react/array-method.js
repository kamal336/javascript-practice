// Array method 
// map return an new array 
const numbers = [2,4,13,6,7,9];
const mapNumbers = numbers.map(number => number * 2);
console.log(mapNumbers);

// foreach loop 
numbers.forEach(number => {
    console.log(number + 13)
});

// filter method for filtering 
const filterNumber = numbers.filter(num => num % 2 === 0);
console.log(filterNumber)

// find method for find first match condition 
const findNumber = numbers.find(num => num % 2 !== 0);
console.log(findNumber);
