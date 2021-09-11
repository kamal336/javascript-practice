// 1. declare variable 
const fatherName = 'Salim Mostafa';
const fatherAge = 59;
console.log(fatherName,fatherAge);

// 2. condition six type 
const number = 50;

// condition <, >
if(number> 30){
    console.log('Number is high')
}else{
    console.log('Number is low.')
}
// condition <
const low = 6;

if(low < 10){
    console.log('Number is low')
}else{
    console.log('Number is high')
}

// condition >=, <=
const newNumber = 200;

if(newNumber >= 100){
    console.log('Number is to high')
}else if(newNumber <= 20){
    console.log('Number is to low')
}

// condition ===, !==
const language = 'javascript';

if(language === 'javascript'){
    console.log('He/She is a javascript developer')
}else{
    console.log('He/She is not a develer')
}

const degignation = 'MERN Developer';
if(degignation !== 'MERN Stack Developer'){
    console.log('He is MERN Stack Developer')
}else{
    console.log('He is a Front end developer')
}

// 4.declare array push ,pop, shift, unshift, index, length 
const names = ['naim','koli','jannat'];
console.log(names);
// push
names.push('kamal','akter');
console.log(names);
// pop 
names.pop();
console.log(names);
// index, length,indexOf
names[2] = 'sahi';
console.log(names.length,names[3],names.indexOf('koli'))

// 5.function 
function multiplication (num1,num2){
   const sum = num1 + num2;
   return sum;
}

console.log(multiplication(33,22))

// 6. three way to access Object by name 
const person ={
    name: 'A kamal',
    salary: 34000,
    position: 'technologist',
    nationality: 'bangladesh'
}

// direction way 
console.log(person.name,person.salary)
// access by Object property name 
console.log(person['position']);
// access by varible name 
const country = 'nationality';
console.log(person[country]);