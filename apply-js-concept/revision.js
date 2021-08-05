// leap year calculation
const leapYear = (year) => {
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        return true;
    }else{
        return false;
    }
}

let isleapYear = leapYear(2000);
console.log('Year is leap year ',isleapYear);

// get oddnumber
let oddNumber =(odd) =>{
    if((odd % 2 == 1) && (odd % 2 != 0)){
        return 'This is a Odd number';
    }else{
        return 'This is a Even number';
    }
}

console.log(oddNumber(5));

// get Even Number
const evenNumber =(even)=>{
    if((even % 2 == 0) && (even % 2 != 1)){
        return 'The number is Even number';
    }else{
        return 'The number is Odd number.';
    }
}

console.log(evenNumber(6));

// factoria with for loop
let addFactorial = 0;
for(let i = 0; i<= 5; i++){
    console.log(i);
    addFactorial += i;
   
}
console.log(addFactorial);

// multiplication with for loop
let mulFactorial = 1;
for(let i = 1; i <= 5; i++){
    mulFactorial *= i;
    console.log(mulFactorial);
}
console.log('for loop end.');
// add factorial with while loop
let addWhileFactoril = 0;
let x = 0;
while (x < 5) {
    x++;
    addWhileFactoril += x;
    console.log(addWhileFactoril);
}

// multipication while loop factorial
let mulWhileFactorial = 1;
let mul = 1;
while (mul < 5) {
    mul++;
    mulWhileFactorial *= mul;
    console.log(mulWhileFactorial);
}

// recursion multiplication
const recurviseFactorial = (n) =>{
    if (n == 1) {
        return 1;
    }else{
     return   n * recurviseFactorial(n - 1);
    }
}
let resultRecursFactorial = recurviseFactorial(5);
console.log('Multiply recursion is', resultRecursFactorial);

// recursion addition
const addRecursion = (add) =>{
    if(add == 0){
        return 0;
    }else{
        return add + addRecursion(add - 1);
    }
}
console.log('Addition recursion results is',addRecursion(5));

console.log('Home work start.')

// home work starts from here

// celcius to farenhiet
const celToFarnHiet = (cel) =>{
    let farnhiet = cel * 9/5 + 32;
    return farnhiet;
}
console.log('Today temperature is', celToFarnHiet(37),'⁰f');

let farnToCelcius = (farn)=>{
    let celcius = (farn - 32) * 5/9;
    return celcius;
}
console.log('Today weather may be very nice. today temperature is',farnToCelcius(98),'⁰c');

//student grade calculation by using condition in function

const studentGrade = (number) =>{
    if ((number > 101) && (number < 120)) {
        return 'Input is to high.'
    }
    else if((number >= 80) && (number <= 100)){
        return 'You got A+.'
    }else if ((number >= 70) && (number <= 79)) {
        return 'You got A.'
    }else if ((number >= 60) && (number <= 69)) {
        return 'You got A-.'
    }else if ((number >= 50) && (number <= 59)) {
        return 'You got B.'
    }else if ((number >= 40) && (number <= 49)) {
        return 'You got C.'
    }else if ((number >= 33) && (number <= 39)) {
        return 'You got D.'
    }else if((number < 33) && (number > 0)){
        return 'You are failed.'
    }else{
        return 'Number is to low';
    }
}

console.log(studentGrade(75));

// interest calculation
// interest formula 
// p = Principal amount
// T = Time
// R = Rate(How much percent)
// Main Formula ==> SI = (P*T*R)/100;

const interestCal = (P,T,R) =>{
   let SI = (P*T*R)/100;  
   return SI;
}

let getInterest = interestCal(100000,12,2);
console.log('Total interest after one year is',getInterest, 'tk');

