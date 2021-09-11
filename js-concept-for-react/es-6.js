// template string 
const numbers = [33,22,13,55,43];
const student  ={
    name: 'Jannatul Naim',
    age: 28,
    position: 'Medical Technologist'
}

console.log(`Student Name is ${student.name} Age ${student.age}, Array two no positon is ${numbers[1]}`)

// arrow function 
const add = x => x * x; //single parameter 
console.log(add(4));

const multiply = (x,y) => x + y; // multi parameter
console.log(multiply(33,22))

const multiLine = (num1, num2) =>{
    const sum = num1 + num2;
    return sum;
}
console.log(multiLine(33,55));

// spread operator 
const currentNumbers = [33,2,56,25,64];
console.log(currentNumbers);

const newNumber = [...currentNumbers]
console.log(newNumber)

currentNumbers.push(90)
currentNumbers.push(190)
console.log(currentNumbers);