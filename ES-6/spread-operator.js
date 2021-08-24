// spread operator
const numbers = [22,32,45,6,96];
console.log(numbers);

const spreadNumbers = [...numbers];
console.log(spreadNumbers);

const maxNum = Math.max(...numbers);
console.log(maxNum);

const maxNum2 = Math.min(...spreadNumbers);
console.log(maxNum2,maxNum);

const marks = [50,44,34,7,22,65];
console.log(marks);
console.log(...marks);

console.log(`Maximum number is ${Math.max(...marks)}`);
console.log(`Minimum number is ${Math.min(...marks)}`);
