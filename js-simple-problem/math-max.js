// general conditional method
let num1 = 40;
let num2 = 55;
let num3 = 70;

if((num1 > num2)&& num1 > num3){
    console.log('Number 1 is highest number.')
}else if ((num2 > num1)&&(num2 > num3)) {
    console.log('Number 2 is the highest number.')
}else{
    console.log('Number 3 is the highest number.')
}

// functional conditonal method find highest number
const highestNumber = (number1,number2,number3) =>{
   if (number1 > number2 && number1 > number3) {
       return number1;
   }else if (number2 > number1 && number2 > number3) {
       return number2;
   }else{
       return number3;
   }
}

console.log('Highest number is',highestNumber(45,3,22));

// functional condition for find get lowest number
let lowestNumber = (lnum1,lnum2,lnum3) =>{
    if((lnum1 < lnum2) && (lnum1 < lnum3)){
        return 'Losest number is lnum1';
    }else if (lnum2 < lnum1 && lnum2 < lnum3) {
        return 'Losest number is lnum2';
    }else{
        return 'Losest number is lnum3';
    }
}

console.log(lowestNumber(23,34,72));

// Now the get max number by javascript Math.max function
let akter  = 30;
let naim = 27;
let sarwar = 35;
let maximum = Math.max(akter,naim,sarwar);
console.log('Maximum age is',maximum);

const maxAge = (age1,age2,age3) =>{
    let maximumAge = Math.max(age1,age2,age3);
    return maximumAge;
}
console.log('Maximum age is',maxAge(32,54,22),'year.');

// get minimum value by using Math.min function
let sumaya = 25;
let soha = 20;
let koli = 27;

console.log('Minimum age is',Math.min(sumaya,koli,soha));

const minAge =(mage1,mage2,mage3) =>{
    let minimumAge = Math.min(mage1,mage2,mage3);
    return minimumAge;
}
console.log('Minimum age is',minAge(34,19,43),'year');

