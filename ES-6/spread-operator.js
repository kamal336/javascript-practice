const numbers = [22,32,45,6,96];
console.log(numbers);

const spreadNumbers = [...numbers];
console.log(spreadNumbers);

const maxNum = Math.max(...numbers);
console.log(maxNum);

const maxNum2 = Math.min(...spreadNumbers);
console.log(maxNum2,maxNum);