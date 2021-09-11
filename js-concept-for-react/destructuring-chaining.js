// Array destructuring 
const numbers = [12,5,6,76];
const [first,second,third,forth] = numbers;
console.log(first,second,forth);

numbers[2] = 22;
console.log(numbers[2]);

// Object destructuring 
const myObj = {
    name: 'kamal',
    age : 30,
    position: 'Web Developer'
}

const {name,age,position} = myObj;
console.log(name,age,position)

// optional chaining 
const wifeObj = {
    name: 'Jannatul Naim',
    position: 'Medical Technologist',
    experience:{
        company: "CSCR",
        position: "Senior MT",
        salary: 30000
    },
    exportIn: ['pathology','heamatology','biochemistry'],
    isMarried: true
}

console.log(wifeObj.position)
console.log(wifeObj?.experience?.salary)
console.log(wifeObj?.exportIn[2])